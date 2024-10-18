import React from 'react'
import { Link } from 'react-router-dom';
import innerBanner from '../../assets/images/banner/inner-banner.jpg';
import pdficon from "../../assets/images/icons/PDF-Icons.png";

const Downloads = () => {
    return (
        <>
            <section className="page-title ">
            <div className="bg-layer" style={{ backgroundImage: `url(${innerBanner})` }}></div>
            <div className="line-box">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                </div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Downloads</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to="/">Home</Link></li>
                            <li><span>Downloads</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <br />
            <section className="departments-style-two alternat-2">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                            <div className="row clearfix">
                                <div className="col-md-6">
                                    <div className="department-details-content citizen-chart-pdf">
                                        <div className="content-two">
                                            <div className="download-box">
                                                <div className="icon-box"><img src={pdficon} alt=""/></div>
                                                <h6>Application form for Birth Certificate</h6>
                                                <div className="download-btn">
                                                    <Link to="../../assets/documents/downloads/birth-cert.pdf" target="_blank" className="theme-btn btn-one">View</Link>
                                                </div>
                                            </div>
                                            <div className="download-box">
                                                <div className="icon-box"><img src={pdficon} alt=""/></div>
                                                <h6>Application form for Death Certificate</h6>
                                                <div className="download-btn">
                                                    <Link to="../../assets/documents/downloads/death-cert.pdf" target="_blank" className="theme-btn btn-one">View</Link>
                                                </div>
                                            </div>
                                            <div className="download-box">
                                                <div className="icon-box"><img src={pdficon} alt=""/></div>
                                                <h6>Application form for Property Transfer 1</h6>
                                                <div className="download-btn">
                                                    <Link to="../../assets/documents/downloads/property-transfer1.pdf" target="_blank" className="theme-btn btn-one">View</Link>
                                                </div>
                                            </div>
                                            <div className="download-box">
                                                <div className="icon-box"><img src={pdficon} alt=""/></div>
                                                <h6>Application form for Property Transfer 2</h6>
                                                <div className="download-btn">
                                                    <Link to="../../assets/documents/downloads/property-transfer2.pdf" target="_blank" className="theme-btn btn-one">View</Link>
                                                </div>
                                            </div>
                                            <div className="download-box">
                                                <div className="icon-box"><img src={pdficon} alt=""/></div>
                                                <h6>Application for New Assessment of Property</h6>
                                                <div className="download-btn">
                                                    <Link to="../../assets/documents/downloads/new-assesment-property.pdf" target="_blank" className="theme-btn btn-one">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Downloads