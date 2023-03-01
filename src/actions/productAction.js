import axios from 'axios'
import {server} from "../store.js"

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = (keyword="",currentPage=1,price=[0,25000],category,rating=1)=> async(dispatch)=>{
    try {
        
        dispatch({type:ALL_PRODUCT_REQUEST});

        let link =`${server}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}`;

        if(category){
            link =`${server}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}
            &category=${category}&rating[gte]=${rating}`;
        } 
        

        const {data} = await axios.get(link);
       
        console.log(data);
        

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data 
        })
    } catch (error) {
        dispatch({
           type:ALL_PRODUCT_FAIL,
           payload:error.response.data.errMessage
           
        });
        
    }
}

export const deleteProduct= (id) => async(dispatch) =>{
    try {
        dispatch({type:DELETE_PRODUCT_REQUEST})
        const {data} = await axios.delete(`${server}/api/v1/admin/product/${id}`);
           
        
        dispatch({type: DELETE_PRODUCT_SUCCESS,payload:data.success})
        
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload:error.response.data.errMessage
         });
    }
}


export const updateProduct= (id,productData) => async(dispatch) =>{
    try {
        dispatch({type: UPDATE_PRODUCT_REQUEST})
        

        const {data} = await axios.put(`${server}/api/v1/admin/product/${id}`, productData,{
            headers: {
                 "Content-Type": "multipart/form-data",
              },
           withCredentials: true,
         });
           
        
        dispatch({type: UPDATE_PRODUCT_SUCCESS,payload:data.success})
        
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload:error.response.data.errMessage
         });
    }
}


export const getAdminProduct = () => async(dispatch) =>{
    try {
        dispatch({type:ADMIN_PRODUCT_REQUEST})
        const {data} = await axios.get(`${server}/api/v1/admin/products`,{
        
           withCredentials: true,
         });
           
        
        dispatch({type:ADMIN_PRODUCT_SUCCESS,payload:data.products})
        
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload:error.response.data.errMessage
         });
    }
}


export const getProductDetails = (id)=> async(dispatch)=>{
    try {
        console.log(id)
        dispatch({type:PRODUCT_DETAILS_REQUEST});

        const {data} = await axios.get(`${server}/api/v1/product/${id}`,{
           withCredentials: true,
         });
      
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product
        })
    } catch (error) {
        dispatch({
           type:PRODUCT_DETAILS_FAIL,
           payload:error.response.data.errMessage
        });
    }
}

export const newReview = (reviewData)=> async(dispatch)=>{
    try {
        dispatch({type:NEW_REVIEW_REQUEST});

        
        
        const {data} = await axios.put(`${server}/api/v1/review`,reviewData,{
            headers: {
                 "Content-Type": "application/json",
              },
           withCredentials: true,
         });
      
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload:data.success
        })
    } catch (error) {
        dispatch({
           type:NEW_REVIEW_FAIL,
           payload:error.response.data.errMessage
        });
    }
}


export const createProduct = (name, price, category, description, stock,images)=> async(dispatch)=>{
    try {
        dispatch({type:NEW_PRODUCT_REQUEST});

    
        const {data} = await axios.post(`${server}/api/v1/admin/product/new`,{name, price, category, description, stock,images},{
            headers: {
                 "Content-Type": "application/json",
              },
           withCredentials: true,
         });
      
        dispatch({
            type:NEW_PRODUCT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
           type:NEW_PRODUCT_FAIL,
           payload:error.response.data.errMessage
        });
    }
}


// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
    try {
      dispatch({ type: ALL_REVIEW_REQUEST });
  
      const { data } = await axios.get(`${server}/api/v1/reviews?id=${id}`,{
       withCredentials: true,
     });
  
      dispatch({
        type: ALL_REVIEW_SUCCESS,
        payload: data.reviews,
      });
    } catch (error) {
      dispatch({
        type: ALL_REVIEW_FAIL,
        payload: error.response.data.errMessage,
      });
    }
  };

  // Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_REVIEW_REQUEST });
  
      const { data } = await axios.delete(
        `${server}/api/v1/reviews?id=${reviewId}&productId=${productId}`
      );
  
      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_REVIEW_FAIL,
        payload: error.response.data.errMessage,
      });
    }
  };


export const clearErrors = ()=> async(dispatch)=>{
   dispatch({
       type: CLEAR_ERRORS
   });
}