import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/userConstants";
import axios from 'axios';
import {server} from "../store.js"


// login
export const login = (email,password) => async (disptach)=>{

    try {
        disptach({type:LOGIN_REQUEST});

     
        const {data} = await axios.post( `${server}/api/v1/login`,
              {email,password},
                    {
                      headers: {
                          "Content-Type": "application/json",
                      },
                    withCredentials: true,
                  }
       );

       disptach({type:LOGIN_SUCCESS ,payload:data.user})
 
    } catch (error) {
        disptach({ type:LOGIN_FAIL, payload:error.response.data.errMessage});
    }


}

// register
export const register = (userData) => async (disptach)=>{

 try {
     
    disptach({type:REGISTER_USER_REQUEST});
    const {data} = await axios.post(`${server}/api/v1/register`,userData,{
      headers: {
          "Content-Type": "multipart/form-data",
      },
    withCredentials: true,
  });

    disptach({type:REGISTER_USER_SUCCESS ,payload:data.user})

     
 } catch (error) {
    disptach({ type: REGISTER_USER_FAIL, payload:error.response.data.errMessage});
}
}

// load user
export const loadUser = () => async (disptach)=>{

    try {
        disptach({type: LOAD_USER_REQUEST});

        
        const {data} = await axios.get(`${server}/api/v1/me`,{
        withCredentials: true,
      });
      

       disptach({type: LOAD_USER_SUCCESS ,payload:data.user})
 
    } catch (error) {
        disptach({ type:LOAD_USER_FAIL, payload:""});
        
    }


}

// logout user
export const logout= () => async (disptach)=>{

    try {
     
        await axios.get(`${server}/api/v1/logout`,{
        withCredentials: true,
      });

       disptach({type:  LOGOUT_SUCCESS})
 
    } catch (error) {
        disptach({ type:LOGOUT_FAIL, payload:error.response.data.errMessage});
    }


}


// update profile
export const updateProfile = (userData) => async (disptach)=>{

    try {
        
       disptach({type:UPDATE_PROFILE_REQUEST});



       const {data} = await axios.put(`${server}/api/v1/profile/update`,userData,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
      withCredentials: true,
    });
      
       disptach({type:UPDATE_PROFILE_SUCCESS ,payload:data.success})
       
        
    } catch (error) {
       disptach({ type:UPDATE_PROFILE_FAIL, payload:error.response.data.errMessage});
   }
   }


// update password
export const updatePassword = (password) => async (disptach)=>{

    try {
        
       disptach({type:UPDATE_PASSWORD_REQUEST});

    
      

       const {data} = await axios.put(`${server}/api/v1/password/update`,password,{
        headers: {
            "Content-Type": "application/json",
        },
      withCredentials: true,
    });
      
       disptach({type:UPDATE_PASSWORD_SUCCESS,payload:data.success});
    
        
    } catch (error) {
       disptach({ type:UPDATE_PASSWORD_FAIL, payload:error.response.data.errMessage});
   }
   }



   // forgotPassword 
export const forgotPassword = (email) => async (disptach)=>{

    try {
        disptach({type: FORGOT_PASSWORD_REQUEST});

     
        const {data} = await axios.post(`${server}/api/v1/password/forgot`,
          email,
          {
            headers: {
                "Content-Type": "application/json",
            },
          withCredentials: true,
        }
       );

     

       disptach({type: FORGOT_PASSWORD_SUCCESS ,payload:data.message})
 
    } catch (error) {
        disptach({ type:FORGOT_PASSWORD_FAIL, payload:error.response.data.errMessage});
    }


}


   // resetPassword 
   export const resetPassword  = (token,passwords) => async (disptach)=>{

    try {
        disptach({type:RESET_PASSWORD_REQUEST});

       
        const {data} = await axios.put(`${server}/api/v1/password/reset/${token}`,
          passwords,
         
          {
           headers: {
                "Content-Type": "application/json",
             },
          withCredentials: true,
        }
       );

       disptach({type: RESET_PASSWORD_SUCCESS,payload:data.success})
 
    } catch (error) {
        disptach({ type:RESET_PASSWORD_FAIL, payload:error.response.data.errMessage});
    }


}

// get All Users
export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_USERS_REQUEST });
      const { data } = await axios.get(`${server}/api/v1/admin/users`,{

      withCredentials: true,
    });
  
      dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.errMessage });
    }
  };


  // get  User Details
export const getUserDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const { data } = await axios.get(`${server}/api/v1/admin/user/${id}`,{
    
      withCredentials: true,
    });
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.errMessage });
    }
  };


  // Update User
export const updateUser = (id, userData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });
  
     
  
      const { data } = await axios.put(
        `${server}/api/v1/admin/user/${id}`,
        userData,
        {
          headers: {
               "Content-Type": "application/json",
            },
         withCredentials: true,
       }
      );
  
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data.errMessage,
      });
    }
  };


  // Delete User
export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
  
      const { data } = await axios.delete(`${server}/api/v1/admin/user/${id}`,{
       withCredentials: true,
     });
  
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data.errMessage,
      });
    }
  };

  
export const clearErrors = ()=> async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    });
 }