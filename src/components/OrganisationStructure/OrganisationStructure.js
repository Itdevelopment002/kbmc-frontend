import React from 'react'
import innerBanner from '../../assets/images/banner/inner-banner.jpg'; 
import img1 from '../../assets/images/Organization-structure.jpg'


const OrganisationStructure = () => {
  return (
    <>
    <section class="page-title">
    <div className="bg-layer" style={{ backgroundImage: `url(${innerBanner})` }}></div>
        <div class="line-box">
            <div class="line-1"></div>
            <div class="line-2"></div>
        </div>
        <div class="auto-container">
            <div class="content-box">
                <h1>Organization Structure</h1>
                <ul class="bread-crumb clearfix">
                    <li><a href="/">Home</a></li>
                    <li><span>Organization Structure</span></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="departments-style-two alternat-2">
        <div class="auto-container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><img width="100%" src={img1} class="img-fluid" alt="" /></div>
                <div class="col-md-3"></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OrganisationStructure