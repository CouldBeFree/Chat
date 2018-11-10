class Chat {
    constructor(chatName){
        this.chats = [];
        this.chatUsers = [];

        if(!chatName){
            throw new Error('Chat name is not passed')
        }

        let chatObj = {
            nameChat: chatName,
            users: []
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
        }
    }
}

let x = new Chat('General');
x.connectUser('Anya', 'Sasha', 'Dima', 'Katya');
console.log(x);