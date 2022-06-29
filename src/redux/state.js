const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {

            posts:
                [
                    { id: 1, message: "MyMessage1", likeCounts: "15" },
                    { id: 2, message: "MyMessage2", likeCounts: "23" },
                    { id: 3, message: "MyMessage3", likeCounts: "33" },
                    { id: 4, message: "MyMessage4" },
                    { id: 5, message: "MyMessage5" },
                    { id: 6, message: "MyMessage6" },
                ],
            newPostText: 'new post text'
        },

        dialogsPage: {
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
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },


    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounts: '0'
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounts: '0'
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ({ type: "ADD-POST" })


export const updateNewPostTextActionCreator = (text) => ({ type: "UPDATE-NEW-POST-TEXT", newText: text })



export default store;
