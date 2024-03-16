
import React, { useContext, useEffect } from 'react'
import { counterContext } from '../../Context/second';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



export default function Cart() {

  const { totalCartPrice, allProducts, updateCount, deleteProduct, clearCart } = useContext(counterContext);

 

  function updateProductCount(id, newCount) {
    const res = updateCount(id, newCount);
    if (res) {
      toast.success('Product Updated Successfully', { position: "top-center" })
    }
    else {
      toast.error('Error occuured', { position: "top-center" })
    }
  }

  async function deleteCartProduct(id) {
    const res = await deleteProduct(id)
    if (res) {
      toast.success('Product Deleted Successfully', { position: "top-center" })
    }
    else {
      toast.error('Error occuured', { position: "top-center" })
    }
  }

  function clearCartProducts() {
    const res = clearCart()
    if (res) {
      toast.success('Cart Successfully Cleared', { position: "top-center" })
    }
    else {
      toast.error('Error occuured', { position: "top-center" })
    }
  }

  return <>
    <div className="container">

      {allProducts.length ? <div>
        <h1 className='mt-2'>Shopping Cart :</h1>
        <div className='d-flex justify-content-between container'>
          <h5 className='text-main mb-3'>Total Cart Price : {totalCartPrice} LE</h5>
          <button className='btn btn-danger' onClick={() => clearCartProducts()}>Clear Cart</button>
        </div>
        <hr />
        <div className="container">
          {allProducts.map((product, idx) => <div className='row' key={idx}>
            <div className="col-md-1 mb-1">
              <img src={product.product.imageCover} alt={product.product.title} className='w-100' />
            </div>
            <div className="col-md-9">
              <h5>{product.product.title}</h5>
              <h5>price : {product.price}</h5>
              <button className='btn btn-outline-danger' onClick={() => { deleteCartProduct(product.product._id) }}>Remove  <i className="fa-regular fa-trash-can"></i></button>
            </div>
            <div className="col-md-2">
              <button className='btn btn-success me-2' onClick={() => updateProductCount(product.product._id, product.count + 1)}>+ </button>
              {product.count}
              <button disabled={product.count == 1} className='btn btn-danger ms-2' onClick={() => updateProductCount(product.product._id, product.count - 1)}>-</button>
            </div>
            <hr className='mt-2' />
          </div>)}
          <div>
            <Link to="/payment">
              <button className='btn check text-light d-block m-auto'>Confirm Payment</button>
            </Link>
          </div>
        </div>
      </div> : <div className='d-flex flex-column align-items-center'>
        <div className="col-md-5 col-12">
          <div className='text-center'>
            <h2 className='pt-3'>Your Cart is empty !</h2>
          </div>
        </div>
      </div>}


    </div>
  </>
}