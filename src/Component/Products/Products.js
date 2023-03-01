import React, { Fragment, useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import './Product.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProduct } from '../../actions/productAction'
import Loader from '../layout/loader/Loader'
import Product from '../../Home/Product'
import Pagination from 'react-js-pagination'
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {useAlert} from 'react-alert';
import MetaData from '../layout/MetaData'


const categories = [
  "Furniture",
  "Clothing",
  "Handicraft",
];

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [rating, setRatings] = useState(0);

  const alert =useAlert();

  const setCurrentPageNo = (e) => {
   setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
     

  const {products,loading,error,productCount,resultPerPage, filteredProductsCount} = useSelector(state =>state.products);
  const keyword = params.keyword;
  

    useEffect(() => {
      if(error){
        alert.error(error);
        dispatch(clearErrors())
      }
       dispatch(getProduct(keyword,currentPage,price,category,rating));
    }, [dispatch,keyword,currentPage,price,category,rating,alert,error])


    let count =  filteredProductsCount;
    return (
        <Fragment>
            {loading?<Loader/> :(

             <Fragment>
                <MetaData title={'Products --- Ecommerce'}/>
                 <h2 className="productsHeading">Products</h2>

                 
          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

           <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={rating}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>





            </div>

            
           



          {resultPerPage < count && (

                <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
                </div>
               )}
             </Fragment>
           
            )}
        </Fragment>
    )
}

export default Products
