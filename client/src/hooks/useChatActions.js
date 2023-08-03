import { useChat } from "../context/ChatProvider";

const useChatActions = () => {
    const { socket } = useChat();

    const sendMessage = (text,  userName) => {
        if(! text) {
            return;
        }
        socket.emit('send-message', { text, userName });
    }

    const getHistory= (userName) => {
        socket.emit('chat-history', { userName });
    }
    return {
        sendMessage,
        getHistory
    }
};

export default useChatActions;