import React from 'react'
import img1 from './../../assets/img1.png'
import img2 from './../../assets/img2.png'
import img3 from './../../assets/img3.png'
import img4 from './../../assets/img4.webp'
import img5 from './../../assets/img5.png'
import img6 from './../../assets/img6.png'


export default function Footer() {
  return <>
    <div className='bg-main-light p-3'>
      <div className="container">
        <h4>Get the FreshCart app</h4>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email ..." />
              </div>
            </div>
            <div className="col-md-2">
              <button className='btn bg-main text-white'>Share App Link</button>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-4">
              <div className='d-flex flex-row'>
                <div>
                  <h6 className='pt-4 pe-2 fw-bold'>Payment</h6>
                </div>
                <div className="footerImgs">
                  <img src={img1} alt="" className='w-25 pe-3' />
                  <img src={img2} alt="" className='w-25 pe-3' />
                  <img src={img6} alt="" className='w-25 pe-3' />
                  <img src={img4} alt="" className='w-25 pe-3' />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className=''>
                  <div>
                    <h6 className='fw-bold'>Get deliveries with FreshCart</h6>
                  </div>
                  <div className="footerImgs">
                    <img src={img3} alt="" className='w-25' />
                    <img src={img5} alt="" className='w-25 pe-4' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}