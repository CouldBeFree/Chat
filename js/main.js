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
            let date = new Date;
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let userMessage = {
                user: user,
                message: message,
                time: `${hour}:${minute}:${second}`,
                read: false
            };
            this.chats[0].chatHistory.push(userMessage);
            return message
        };

        this.showMessage = function (index, count) {
            if(arguments.length === 2) {
                let history = this.chats[0].chatHistory.slice(index, count);
                for(let i = 0; i < history.length; i++){
                    console.log(`[${history[i].user}] [${history[i].message}] ${history[i].time}`)
                }
            }
            else if(arguments.length === 1){
                let history = this.chats[0].chatHistory.slice(0, count);
                for(let i = 0; i < history.length; i++){
                    console.log(`[${history[i].user}] [${history[i].message}] ${history[i].time}`)
                }
            }
            else if (arguments.length === 0){
                let history = this.chats[0].chatHistory.slice(0, 10);
                for(let i = 0; i < history.length; i++){
                    console.log(`[${history[i].user}] [${history[i].message}] ${history[i].time}`)
                }
            }
        };

        this.unreadedMessages = function (user) {
            let userArr = this.chats[0].chatHistory;
            userArr.filter(item => item.user === user).map(item => item.read = true);
            return userArr;
        }
    }
}

let x = new Chat('General');
x.connectUser('Anya', 'Sasha', 'Dima', 'Katya');
x.sendMessage('Sasha', 'Hello guys');
x.sendMessage('Sasha', 'How are you doing');
x.sendMessage('Dima', 'I am fine, thanks!');
x.sendMessage('Katya', 'I am doing well! What about you?');
x.showMessage();
x.unreadedMessages('Sasha');
console.log(x);