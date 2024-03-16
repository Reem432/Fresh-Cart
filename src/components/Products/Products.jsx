import React, { useContext, useEffect, useState } from 'react'
import { counterContext } from '../../Context/second';
import HomeSlider from '../HomeSlider/HomeSlider';
import img4 from './../../assets/im4.jpg'
import img5 from './../../assets/im5.jpg'
import CategorySlider from '../CategorySlider/CategorySlider';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/Slices/cart-slice';
import { wishContext } from '../../Context/wishlist';



export default function Products() {

  const { addProductTCart } = useContext(counterContext)
  const { addProductToWish, idProducts } = useContext(wishContext)

  function getAllProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  const { data, isLoading } = useQuery('getProducts', getAllProducts)



  if (isLoading) {
    return <Loader />
  }

  return <>

    <div className="container">
      <div className="row mb-4">
        <div className="col-md-9">
          <HomeSlider />
        </div>
        <div className="col-md-3 my-5">
          <img style={{ height: "150px" }} src={img4} alt="foodImage" className="w-100" />
          <img style={{ height: "150px" }} src={img5} alt="foodImage" className="w-100" />
        </div>
      </div>
      <div className="mb-5">
        <CategorySlider />

      </div>
      <div className="row">
        {data.data.data.map((product, idx) => <div key={idx} className=" col-md-3 overflow-hidden product my-2">
         <div className="col-cont">
         <Link to={`/productDetails/${product.id}`}>
            <div className='cursor-pointer '>
              <figure className='position-relative'>
                <img src={product.imageCover} className='w-100' alt={product.title} />
              </figure>
              <figcaption className='ps-2 pe-2'>
                <p className="text-main">{product.category.name}</p>
                <h4 className='text-center'>{product.title.split(' ').slice(0, 2).join(' ')}</h4>

                <div className="d-flex justify-content-between">
                  {product.priceAfterDiscount ? <p className='text-black bolder'>{product.price}</p>
                    : <p>{product.price} LE</p>}
                  <div className='d-flex'>
                    <p>{product.ratingsAverage}</p>
                    <i className="fa-solid fa-star pt-1 ps-1" style={{ color: '#FFD43B' }} />
                  </div>
                </div>
              </figcaption>
            </div>
          </Link>
          <button className='btn bg-main text-white w-100 mb-1' onClick={() => addProductTCart(product.id)}> + Add to Cart</button>
          <p className='mx-2 text-center'><i id='fav' className={`fa-solid fa-heart fa-xl text-${idProducts.includes(`${product._id}`) ? 'danger' : 'black'
              } ` }onClick={()=>{
                addProductToWish(product._id)
                }}></i></p>
         </div>
          {/* <button
            className={`btn btn-${idProducts.includes(`${product.id}`) ? 'danger' : 'outline-danger'
              } w-100 mb-2`}
            onClick={() => addProductToWish(product.id)}
          >
            {idProducts.includes(product.id) ? 'Already in Wishlist' : 'Add to Wishlist'}
            <i className="fa-regular fa-heart ps-2"></i>
          </button> */}
        </div>)}
      </div>
    </div >

  </>

}