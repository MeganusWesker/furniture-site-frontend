import React, { useEffect, Fragment,useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProductDetails,newReview } from '../../actions/productAction'
import ReactStars from 'react-rating-stars-component'
import ReviewCard from './ReviewCard'
import Loader from '../layout/loader/Loader'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import {addItemsToCart} from '../../actions/cartActions'
import { NEW_REVIEW_RESET }  from "../../constants/productConstants"


import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";


const ProductDetails = () => {
  const alert = useAlert();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.productDetails)
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: '#54b8f7',
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    readOnly: true,
    isHalf: true,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
 
  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  const increaseQuantity = () =>{
    if(product.stock <= quantity){
      return 
    }

    const qty = quantity +1;
    setQuantity(qty);

  }

  const decreaseQuantity = () =>{
    if( 1 >= quantity){
      return 
    }
  
    const qty = quantity -1;
    setQuantity(qty);

  }

  const addItemsToCartHandler =() =>{
    dispatch(addItemsToCart(params.id,quantity));
    alert.success("Item added to cart successfully")
  }
   
  useEffect(() => {
    if(error){
       alert.error(error);
       dispatch(clearErrors());
    }
    if(reviewError){
       alert.error(reviewError);
       dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
   

    dispatch(getProductDetails(params.id))
  }, [dispatch, params.id,error,alert,reviewError,success])

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
       <MetaData title={`${product.name} -- Ecommerce`}/>
        <div className="ProductDetails">
          <div>
            <Carousel>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>

          <div>
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
            </div>
            <div className="detailsBlock-2">
              <ReactStars {...options} />
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReviews} Reviews)
              </span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`₹${product.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button onClick={decreaseQuantity} >-</button>
                  <input readOnly type="number" value={quantity} />
                  <button onClick={increaseQuantity} >+</button>
                </div>
                <button
                  disabled={product.stock < 1 ? true : false}
                  onClick={addItemsToCartHandler}
                >
                  Add to Cart
                </button>
              </div>

              <p>
                Status:
                <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                  {product.stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>

            <div className="detailsBlock-4">
              Description : <p>{product.description}</p>
            </div>

            <button onClick={submitReviewToggle} className="submitReview">
              Submit Review
            </button>
          </div>
        </div>

        <h3 className="reviewsHeading">REVIEWS</h3>

        <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>



        {product.reviews && product.reviews[0] ? (
          <div className="reviews">
            {product.reviews &&
              product.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
          </div>
        ) : (
          <p className="noReviews">No Reviews Yet</p>
        )}
      </Fragment>
    )}
  </Fragment>
  )
}

export default ProductDetails
