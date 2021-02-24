import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

 let store = {
   _state:{
    profilePage: {
      posts:[
        {id:1, message:'Hi, I love u', likesCount:5},
        {id:2, message:'Sorry for that', likesCount:2},
        {id:3, message:'I like Dark Souls', likesCount:20},
        {id:4, message:'Dude, are u mad??', likesCount:10},
        {id:5, message:'Cool', likesCount:30},
        {id:6, message:'Great job', likesCount:50},
      ],
      newPostText:'that`s my new post',
    },
    dialogsPage: {
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
      newMessageBody:""    
    },
    sidebar:{}

  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage =   (this._state.sidebar, action);

    this._callSubscriber(this._state);
    }
  }

  export default store;