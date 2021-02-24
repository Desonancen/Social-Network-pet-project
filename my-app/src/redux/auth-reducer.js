import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    userId:null,
    email:null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        return {
            ...state,
            ...action.payload,
        }    
        default:
            return state;
    }
}

const setAuthUserData = (userID, email, login, isAuth) =>({type:SET_USER_DATA, payload:{userID,email,login,isAuth}})

export const getAuthUserData = () => async (dispatch) => {
        let response =  await authAPI.getAuthInfo();

            if(response.data.resultCode === 0) {
              let {id, email, login } = response.data.data;
              dispatch(setAuthUserData (id, email, login, true));
            }
    }

export const login = (email, password, remeberMe) => async (dispatch) => {

        let response = await authAPI.login(email, password, remeberMe)
            if(response.data.resultCode === 0) {
              dispatch(getAuthUserData ());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error:message}));
            }
          }

export const logout = () => async (dispatch) => {
       let response = await authAPI.logout()
            if(response.data.resultCode === 0) {
              dispatch(getAuthUserData (null, null, null, false));
            }
          }

export default authReducer;