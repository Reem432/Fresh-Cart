
import React, { useContext } from 'react'
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { wishContext } from '../../Context/wishlist';
import { counterContext } from '../../Context/second';

export default function Wishlist() {

  const { allWishProducts, removeFromWish } = useContext(wishContext);
  const { addProductTCart } = useContext(counterContext);


  if (!allWishProducts) {
    return <Loader />
  }

  async function deleteWishProduct(id) {
    const res = await removeFromWish(id)
    if (res) {
      toast.success('Product Deleted Successfully', { position: "top-center" })
    }
    else {
      toast.error('Error occuured', { position: "top-center" })
    }
  }

  return <>
    <div className="container">

      {allWishProducts.length ? <div>
        <h1 className='mt-2'>Wishlist :</h1>
        <div className='d-flex justify-content-between container'>
        </div>
        <hr />
        <div className="container">
          {allWishProducts.map((product, idx) => <div className='row' key={idx}>
            <div className="col-md-1 mb-1">
              <img src={product.imageCover} alt={product.title} className='w-100' />
            </div>
              <div className="col-md-9">
                <h5>{product.title}</h5>
                <h5>price : {product.price}</h5>
                <button className='btn btn-outline-danger' onClick={() => deleteWishProduct(product.id)}>Remove  <i className="fa-regular fa-trash-can"></i></button>
              </div>
              <div className="col-md-2">
                <button className='btn bg-main text-light w-100' onClick={() => addProductTCart(product.id)}> + Add to Cart</button>
              </div>
            <hr className='mt-2' />
          </div>)}
        </div>
      </div> 
      : <div className='d-flex flex-column align-items-center'>
        <div className="col-md-5 col-12">
          <div className='text-center'>
            <h2 className='pt-3'>Empty !</h2>
          
          </div>
        </div>
      </div>}


    </div>
  </>
}