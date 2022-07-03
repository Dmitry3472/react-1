const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: "Message1" },
        { id: 2, message: "Message2" },
        { id: 3, message: "Message3" },
        { id: 4, message: "Message4" },
        { id: 5, message: "Message5" },
        { id: 6, message: "Message6" },
    ],
    dialogs: [
        { id: 1, name: "User1" },
        { id: 2, name: "User2" },
        { id: 3, name: "User3" },
        { id: 4, name: "User4" },
        { id: 5, name: "User5" },
        { id: 6, name: "User6" },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({ id: 6, message: body });

    }
    return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;