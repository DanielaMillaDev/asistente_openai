# Aplicación Chat con asistente virtual
Una aplicacion que permite comunicarse con un asistente virtual con inteligencia artificial
<br>
Construido con Python & Socket.IO & React.

## Consideraciones
1. Tener instalado NodeJS, para este proyecto se utilizo la version v16.16.0
2. Tener instalado Python, para este proyecto se utilizo la version 3.11.3
3. Utilizar un gestor de entorno para Python(Virtualenv,conda,etc)
4. Una base de datos configurada en MongoDB


## Intalación

Para usar la aplicacion se deben seguir los sisguientes pasos:
1. Clonar el repositorio en tu maquina
2. Crear una BDD en MongoDB llamada chat_history y una coleccion dentro de ella llamada message_store
3. Navegar hasta la carpeta server y correr `python server.py`
4. Navegar hasta la carpeta client y correr `npm install` para instalar dependencias client-side 
5. Correr  `npm start` para inciar el servidor

## Uso
Una vez intalada la aplicacion e iniciado el servidor y cliente, la aplicacion estara disponible en tu navegador en la dirección `http://localhost:3000`.

