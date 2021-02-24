const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages:[
        {id:1, message:'Hi'},
        {id:2, message:'How do you do?'},
        {id:3, message:'What`s up man?'},
        {id:4, message:'Yeaah'},
        {id:5, message:'Cool'},
        {id:6, message:'Great job'},
      ],
      dialogs:[
        {id:1, name:'Kolya'},
        {id:2, name:'Max'},
        {id:3, name:'Bogdan'},
        {id:4, name:'Alyona'},
        {id:5, name:'Vanya'},
        {id:6, name:'Vova'},
      ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
                return {...state ,
                    newMessageBody:action.body};
        case SEND_MESSAGE:
            let body = action.newMessageBody;
                return {...state,
                newMessageBody:'',
                messages:[...state.messages, {id:6, message: body}]
                };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) =>({type:SEND_MESSAGE, newMessageBody})

export const updateNewMessageBodyCreator = (body) =>({type:UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;