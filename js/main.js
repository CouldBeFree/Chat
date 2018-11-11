class Chat {
    constructor(chatName){
        this.chats = [];

        if(!chatName){
            throw new Error('Chat name is not passed')
        }

        let chatObj = {
            nameChat: chatName,
            users: [],
            chatHistory: []
        };
        this.chats.push(chatObj);

        this.connectUser = function (user) {
            let args = Array.from(arguments);
            let filtered = args.filter(item => typeof item === 'string' && item !== '');
            let targetObj = this.chats.find(obj => {
                return obj.nameChat === chatName
            });
            for(let i=0; i<filtered.length; i++){
                targetObj.users.push(filtered[i]);
            }
        };

        this.disconnectUser = function (user) {
            let chatArr = this.chats[0].users;
            let userIndex = chatArr.indexOf(user);
            return chatArr.splice(userIndex, 1)
        };

        this.sendMessage = function (user, message) {
            let chatArr = this.chats[0].users.filter(item => item === user);
            if(!chatArr.length){
                throw new Error('User is not connected to this chat')
            }
            let userMessage = {
                user: user,
                message: message
            };
            this.chats[0].chatHistory.push(userMessage);
            return message
        };
    }
}

let x = new Chat('General');
x.connectUser('Anya', 'Sasha', 'Dima', 'Katya');
x.disconnectUser('Katya');
x.sendMessage('Sasha', 'Hello guys');
console.log(x);