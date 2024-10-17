import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/satymev-jayate-3.png';
import img2 from '../../assets/images/icons/icon-25.png';
import img3 from '../../assets/images/kbmc_logo.jpg';
// import img4 from '../../assets/images/KBMC-logo-1-edited2.png';
import img5 from '../../assets/images/icons/icon-4.png';
// import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <>
            <div class="boxed_wrapper">
                <div id="search-popup" class="search-popup">
                    <div class="popup-inner">
                        <div class="upper-box clearfix">
                            <figure class="logo-box pull-left">
                                <a href="index.php">
                                    <img src={img3} alt="KBMC Logo" />
                                </a>
                            </figure>
                            <div class="close-search pull-right"><i class="fa-solid fa-xmark"></i></div>
                        </div>
                        <div class="overlay-layer"></div>
                        <div class="auto-container">
                            <div class="search-form">
                                <form method="post" action="#.">
                                    <div class="form-group">
                                        <fieldset>
                                            <input type="search" class="form-control" name="search-input" value="" placeholder="Type your keyword and hit" required />
                                            <button type="submit"><img src={img5} alt="" /></button>
                                        </fieldset>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <header class="main-header">
                    <div class="header-top">
                        <div class="row" style={{alignItems:'center'}}>
                            <div class="col-md-5 col-xl-5 text-start">

                            </div>
                            <div class="col-md-2 col-xl-2">
                                <figure class="logo text-center"><a href="#."><img src={img1} alt="logo" style={{width:'50px'}} /></a></figure>

                            </div>


                            <div class="col-md-2 col-xl-2">
                                <div class="search-box">
                                    <form method="post" action="#.">
                                        <div class="form-group">
                                            <input type="search" name="search-field" placeholder="Search here..." required />
                                            <button type="submit"><img src={img2} alt="" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-2 col-xl-3">
                                <ul class="social-links clearfix d-none d-md-block">
                                    <li>
                                        <div class="language-box">
                                            <div class="select-box">
                                                <select class="selectmenu">
                                                    <option>English</option>
                                                    <option>Marathi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#."><span class="fab fa-youtube"></span></a></li>
                                    <li><a href="#."><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="https://twitter.com/home" target="_blank"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100015538206978&mibextid=ZbWKwL" target="_blank"><span class="fab fa-facebook"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="header-lower">
                        <div class="outer-box">
                            <div class="logo-box">
                                <figure class="logo"><a href="index.php"><img src="assets/images/kbmc_logo.jpg" alt="logo" /></a></figure>
                            </div>
                            <div class="menu-area">
                                <div class="mobile-nav-toggler">
                                    <i class="icon-bar"></i>
                                    <i class="icon-bar"></i>
                                    <i class="icon-bar"></i>
                                </div>
                                <nav class="main-menu navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation clearfix">
                                            <li class="current"><a href="index.php">Home</a> </li>
                                            <li class="dropdown"><a href="#.">About KBMC</a>
                                                <ul>
                                                    <li><a href="history.php">History</a></li>
                                                    <li><a href="ward.php">Wards</a></li>
                                                    <li><a href="elected-member.php">Elected Wing</a></li>
                                                    <li><a href="org-structure.php">Organization Structure</a></li>
                                                    <li><a href="functions.php">Functions</a></li>
                                                    <li><a href="departments.php">Departments</a></li>
                                                    <li><a href="elected-pre-officer.php">Previous Chief Officers</a></li>
                                                    <li><a href="elected-pre-representative.php">Previous Presidents</a></li>
                                                    <li><a href="awards.php">Awards</a></li>
                                                </ul>
                                            </li>

                                            <li class="dropdown"><a href="#.">City Profile</a>
                                                <ul>
                                                    <li><a href="assets/documents/KBMC CIRCULATION A3 COLOR-Brown-24 (1).pdf" target="_blank">Areas </a></li>
                                                    <li><a href="property-holder.php">Property Holder</a></li>
                                                    <li><a href="properties_milkat.php">Muncipal Properties</a></li>
                                                    <li><a href="schools.php">Schools</a></li>
                                                    <li><a href="gardens.php">Gardens</a></li>
                                                    <li><a href="electric.php">Electric</a></li>
                                                    <li><a href="roads.php">Roads</a></li>
                                                    <li><a href="tree-census.php">Tree Census</a></li>
                                                    <li><a href="health.php">Health</a></li>
                                                    <li><a href="ponds-talao.php">Ponds / Talao</a></li>
                                                    <li><a href="fire-station.php">Fire Station</a></li>
                                                    <li><a href="private_hospital.php">Private Hospital</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a href="#.">Online Services</a>
                                                <ul>
                                                    <li><a href="https://mahaulb.in/MahaULB/property/propertyOnlinePay" target="_blank">Property Tax Payment</a></li>
                                                    <li><a href="https://mahaulb.in/MahaULB/property/onlineReceiptReprint" target="_blank">Property Tax Receipt</a></li>
                                                    <li><a href="https://mjp.maharashtra.gov.in/pay-water-bill-online/" target="_blank">Water Tax Payment</a></li>
                                                    <li><a href="https://crsorgi.gov.in/web/index.php/auth/login" target="_blank">Birth &amp; Death Search </a></li>
                                                    <li><a href="https://mahatenders.gov.in/nicgep/app" target="_blank">Online Tenders</a></li>
                                                    <li><a href="https://maha.autodcr.com/BPAMSClient/Default.aspx" target="_blank">Auto DCR</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a href="#.">Schemes</a>
                                                <ul>
                                                    <li><a href="assets/documents/Nulm_mahiti.pdf" target="_blank">NULM</a></li>
                                                    <li><a href="pmay.php">PMAY</a></li>
                                                    <li><a href="nuhm.php">NUHM</a></li>
                                                    <li><a href="amrut.php">AMRUT</a></li>
                                                    <li><a href="assets/documents/Swachh Bharat Abhiyan (Health).pdf" target="_blank">Swachh Bharat</a></li>
                                                </ul>
                                            </li>

                                            <li class="dropdown"><a href="#.">Complaints</a>
                                                <ul>
                                                    <li><a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank">Aaple Sarkar</a></li>
                                                    <li><a href="https://pgportal.gov.in/" target="_blank">P G Portal</a></li>
                                                    <li><a href="https://rtionline.maharashtra.gov.in/RTIMIS/login/index.php" target="_blank">Right to Information</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div class="menu-right-content">

                                    <div class="btn-box">
                                        <a href="#." class="header-btn">Login</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sticky-header">
                        <div class="outer-container">
                            <div class="outer-box">
                                <div class="logo-box">
                                    <figure class="logo"><a href="#."><img src="assets/images/KBMC-logo-1-edited2.png" alt="logo" /></a></figure>
                                </div>
                                <div class="menu-area clearfix">
                                    <nav class="main-menu clearfix">
                                    </nav>
                                    <div class="menu-right-content">
                                        <div class="search-box">
                                            <div class="search-box-outer search-toggler"><img src="assets/images/icons/icon-4.png" alt="" /></div>
                                        </div>

                                        <div class="btn-box">
                                            <a href="#." class="header-btn">Administration Chief</a>
                                        </div>
                                        <div class="language-box">
                                            <div class="select-box">
                                                <select class="selectmenu">
                                                    <option>English</option>
                                                    <option>Marathi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div class="mobile-menu">
                    <div class="menu-backdrop"></div>
                    <div class="close-btn"><i class="fas fa-times"></i></div>

                    <nav class="menu-box">
                        <div class="nav-logo"><a href="#."><img src="assets/images/KBMC-logo-1-edited2.png" alt="" title="" /></a></div>
                        <div class="menu-outer"></div>

                        <div class="social-links">
                            <ul class="clearfix">
                                <li><a href="#."><span class="fab fa-youtube"></span></a></li>
                                <li><a href="#."><span class="fab fa-instagram"></span></a></li>
                                <li><a href="https://twitter.com/home" target="_blank"><span class="fab fa-twitter"></span></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100015538206978&mibextid=ZbWKwL" target="_blank"><span class="fab fa-facebook"></span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                </div>
            </>


            )
}

            export default Header