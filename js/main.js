class Chat {
    constructor(chatName, user){
        this.chats = [];
        this.chatUsers = [];

        if(!chatName){
            throw new Error('Chat name is not passed')
        }

        let chatObj = {nameChat: chatName};
        this.chats.push(chatObj);

        this.connectUser = function (user) {
            
        }
    }
}

let x = new Chat('General', 'Anya');
console.log(x);

let test = [
    {
        chatName: 'General',
        users: ['Dima']
    }
];