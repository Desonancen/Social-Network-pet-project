import { profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts:[
        {id:1, message:'Hi, I love u', likesCount:5},
        {id:2, message:'Sorry for that', likesCount:2},
        {id:3, message:'I like Dark Souls', likesCount:20},
        {id:4, message:'Dude, are u mad??', likesCount:10},
        {id:5, message:'Cool', likesCount:30},
        {id:6, message:'Great job', likesCount:50},
      ],
      profile: null,
      status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
        let newPost = {
          id:7,
          message: action.newPostText,
          likesCount:0
        };
        return {...state,
          newPostText:'',
          posts: [...state.posts, newPost]
        }
      case SET_USER_PROFILE: {
        return {...state, profile: action.profile};
      }
      case SET_STATUS: {
        return {...state,
          status: action.status
        };
      }
      case DELETE_POST:
        return {...state, posts: state.posts.filter(p => p.id != action.postId)  }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) =>({type:ADD_POST, newPostText})
export const setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile})
export const setStatus = (status) =>({type:SET_STATUS, status})
export const deletePost = (postId) =>({type:DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
    dispatch(setStatus(status));
  }
}


export default profileReducer;