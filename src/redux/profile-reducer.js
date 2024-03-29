const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: 'new post text',
    profile: null

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCounts: '0'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }

        }
        default: return state;

    }

}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;