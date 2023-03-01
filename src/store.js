import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer,productDetailsReducer,newReviewReducer, newProductReducer,deleteProductReducer,updateProductReducer,reviewReducer,productReviewsReducer } from './reducers/productReducer';
import {userReducer,profileReducer,forgotPasswordReducer, allUsersReducer,userDetailsReducer} from './reducers/userReducer';
import {  cartReducer } from './reducers/cartReducer';
import { newOrderReducer,myOrdersReducer,orderDetailsReducer,orderReducer,allOrdersReducer} from './reducers/orderReducer';



const reducer = combineReducers({
   products:productReducer,
   productDetails:productDetailsReducer,
   user:userReducer,
   profile:profileReducer,
   forgotPassword:forgotPasswordReducer,
   cart:cartReducer,
   newOrder: newOrderReducer,
   myOrders:myOrdersReducer,
   orderDetails: orderDetailsReducer,
   newReview:newReviewReducer,
   newProduct: newProductReducer,
   deleteProduct:deleteProductReducer,
   updateProduct:updateProductReducer,
   order:orderReducer,
   allOrders:allOrdersReducer,
   allUsers: allUsersReducer,
   userDetails:userDetailsReducer,
   review:reviewReducer,
   productReviews:productReviewsReducer
});

let intialState ={
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
          shippingInfo: localStorage.getItem("shippingInfo")
          ? JSON.parse(localStorage.getItem("shippingInfo"))
          : {},
      },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export const server="https://furniture-style-site.onrender.com";



