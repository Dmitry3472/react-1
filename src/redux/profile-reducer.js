const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {

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
}


const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 7,
            message: state.newPostText,
            likeCounts: '0'
        }
        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;