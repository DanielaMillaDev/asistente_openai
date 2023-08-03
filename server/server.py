
import os
import uuid
from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from langchain.chat_models import ChatOpenAI
from langchain.schema import(
    SystemMessage,
    HumanMessage,
    AIMessage
)
#Cargar keys de enviroment
load_dotenv()

# Conectar MongoDB
conexion =  os.getenv("SERVER_MONGO") 
# Crar un nuevo cliente y conectar servidor
client = MongoClient(conexion, server_api=ServerApi('1'))
# Acceder a BD y coleccion
db = client['chat_history']
messages_collection = db['message_store']

# Enviar respuesta de conexion
try:
    client.admin.command('ping')
    print("Conexion a DB exitosa!")
except Exception as e:
    print(e)

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY") 
socketio = SocketIO(app,cors_allowed_origins="*")

# Ruta para renderizar la página de chat.
@app.route('/')

# Definir configuracion de API
def init():
    #Cargar API KEY desde variables de enviroment
    if os.getenv("OPENAI_API_KEY") is None or os.getenv("OPENAI_API_KEY") == "":
        print("OPENAI_API_KEY no esta configurada")
        exit(1)
    else:
        print("OPENAI_API_KEY esta configurada")

# Manejador de eventos para recibir y reenviar mensajes.
@socketio.on('send-message')
def handle_message(data):
    #Configurar IA
    chat = ChatOpenAI(temperature=0)
    contenido = [SystemMessage(content="Eres un asistente virtual.")]
    contenido.append( HumanMessage(content=data['text']))
    #Obtener respuesta
    ai_response= chat(contenido).content
    contenido.append(AIMessage(content=ai_response))
    
    #Usuario
    usuario= data['userName']

    #Almacenar respuesta/preguntas en formato json
    for i, msg in enumerate(contenido[1:]):
        json_mensaje =[]
        if i %2 ==0:
            json_mensaje.append({
                      "text": msg.content,
                      "author":usuario,
                      "id":str(uuid.uuid4()) + '_user'
                     })   
        else:
            json_mensaje.append({
              "text": msg.content,
              "author":'BOT',
              "id":str(uuid.uuid4()) + '_ai'
            })

        # Guardar el mensaje en la base de datos
        messages_collection.insert_one({'id_chat': usuario.lower(),'content': json_mensaje})
        emit('receive-message', json_mensaje,broadcast=True)

# Manejador de eventos para obtener historial
@socketio.on('chat-history')
def handle_history(data):
    # Obtiene los registros de la coleccion filtrados por id de chat
    result = messages_collection.find({"id_chat": data['userName'].lower()})  
    
    # Itera sobre los registros obtenidos
    for msg in result:
        contenido = msg['content']
        emit('receive-message', contenido,broadcast=True)        

if __name__ == '__main__':
    init()
    socketio.run(app)