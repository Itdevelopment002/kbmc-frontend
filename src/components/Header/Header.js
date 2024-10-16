import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/satymev-jayate-3.png';
import img2 from '../../assets/images/icons/icon-25.png';
import img3 from '../../assets/images/kbmc_logo.jpg';
// import img4 from '../../assets/images/KBMC-logo-1-edited2.png';
import img5 from '../../assets/images/icons/icon-4.png';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <header className="main-header">
            {/* <!-- header-top --> */}
            <div className="header-top">
                <div className="row" style={{ alignItems: 'center' }}>
                    <div className="col-md-5 col-xl-5 text-start">
                        {/* <!-- <ul className="option-list clearfix">
                        <li><Link to="#.">Sitemap</Link></li>
                        <li><Link to="#.">A+</Link></li>
                        <li><Link to="#.">A</Link></li>
                        <li><Link to="#.">A-</Link></li>
                        <li>
                            <div className="language-box">                                       
                                <div className="select-box">
                                    <select className="selectmenu">
                                        <option>English</option>
                                        <option>Marathi</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                    </ul> --> */}
                    </div>
                    <div className="col-md-2 col-xl-2">
                        <figure className="logo text-center"><Link to="#."><img src={img1} alt="logo" style={{ width: '50px' }} /></Link></figure>
                        {/* <!-- <ul className="info-list clearfix">
                        <li><img src="assets/images/icons/icon-1.png" alt="">Katrap, Badlapur, Maharashtra 421503.</li>
                        <li><img src="assets/images/icons/icon-2.png" alt=""><Link to="#.">kbmc@gmail.com</Link></li>
                    </ul> --> */}
                    </div>

                    {/* <!-- <div className="col-md-1 col-xl-1"></div> --> */}
                    <div className="col-md-2 col-xl-2">
                        <div className="search-box">
                            <form method="post" action="#.">
                                <div className="form-group">
                                    <input type="search" name="search-field" placeholder="Search here..." required="" />
                                    <button type="submit"><img src={img2} alt="" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-3">
                        <ul className="social-links clearfix d-none d-md-block">
                            <li>
                                <div className="language-box">
                                    <div className="select-box">
                                        <select className="selectmenu" >
                                        {/* style={{ display: 'none' }} */}
                                            <option>English</option>
                                            <option>Marathi</option>
                                        </select>
                                        {/* <div className="nice-select selectmenu" tabindex="0"><span className="current">English</span><ul className="list"><li data-value="English" className="option selected">English</li><li data-value="Marathi" className="option">Marathi</li></ul></div> */}
                                    </div>
                                </div>
                            </li>

                            <li><Link to="#"><FaYoutube /></Link></li>
                            <li><Link to="#"><FaInstagram /></Link></li>
                            <li><Link to="https://twitter.com/home" target="_blank"><FaTwitter /></Link></li>
                            <li><Link to="https://www.facebook.com/profile.php?id=100015538206978&mibextid=ZbWKwL" target="_blank"><FaFacebook /></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- header-lower --> */}
            <div className="header-lower">
                <div className="outer-box">
                    <div className="logo-box">
                        <figure className="logo"><Link to="index.php"><img src={img3} alt="logo" /></Link></figure>
                    </div>
                    <div className="menu-area">
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li className="current"><Link to="index.php">Home</Link> </li>
                                    <li className="dropdown"><Link to="#.">About KBMC</Link>
                                        <ul>
                                            <li><Link to="/history">History</Link></li>
                                            <li><Link to="/ward">Wards</Link></li>
                                            <li><Link to="/elected-member">Elected Wing</Link></li>
                                            <li><Link to="/org-structure">Organization Structure</Link></li>
                                            <li><Link to="/functions">Functions</Link></li>
                                            <li><Link to="/departments">Departments</Link></li>
                                            <li><Link to="/elected-pre-officer">Previous Chief Officers</Link></li>
                                            <li><Link to="/elected-pre-representative">Previous Presidents</Link></li>
                                            <li><Link to="/awards">Awards</Link></li>
                                        </ul>
                                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                    <li className="dropdown"><Link to="#.">City Profile</Link>
                                        <ul>
                                            <li><Link to="/assets/documents/KBMC CIRCULATION A3 COLOR-Brown-24 (1).pdf" target="_blank">Areas </Link></li>
                                            <li><Link to="/property-holder">Property Holder</Link></li>
                                            <li><Link to="/properties_milkat">Muncipal Properties</Link></li>
                                            <li><Link to="/schools">Schools</Link></li>
                                            <li><Link to="/gardens">Gardens</Link></li>
                                            <li><Link to="/electric">Electric</Link></li>
                                            <li><Link to="/roads">Roads</Link></li>
                                            <li><Link to="/tree-census">Tree Census</Link></li>
                                            <li><Link to="/health">Health</Link></li>
                                            <li><Link to="/ponds-talao">Ponds / Talao</Link></li>
                                            <li><Link to="/fire-station">Fire Station</Link></li>
                                            <li><Link to="/private-hospital">Private Hospital</Link></li>
                                        </ul>
                                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                    <li className="dropdown"><Link to="#.">Online Services</Link>
                                        <ul>
                                            <li><Link to="https://mahaulb.in/MahaULB/property/propertyOnlinePay" target="_blank">Property Tax Payment</Link></li>
                                            <li><Link to="https://mahaulb.in/MahaULB/property/onlineReceiptReprint" target="_blank">Property Tax Receipt</Link></li>
                                            <li><Link to="https://mjp.maharashtra.gov.in/pay-water-bill-online/" target="_blank">Water Tax Payment</Link></li>
                                            <li><Link to="https://crsorgi.gov.in/web/index.php/auth/login" target="_blank">Birth &amp; Death Search </Link></li>
                                            <li><Link to="https://mahatenders.gov.in/nicgep/app" target="_blank">Online Tenders</Link></li>
                                            <li><Link to="https://maha.autodcr.com/BPAMSClient/Default.aspx" target="_blank">Auto DCR</Link></li>
                                        </ul>
                                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                    <li className="dropdown"><Link to="#.">Schemes</Link>
                                        <ul>
                                            <li><Link to="assets/documents/Nulm_mahiti.pdf" target="_blank">NULM</Link></li>
                                            <li><Link to="pmay.php">PMAY</Link></li>
                                            <li><Link to="nuhm.php">NUHM</Link></li>
                                            <li><Link to="amrut.php">AMRUT</Link></li>
                                            <li><Link to="assets/documents/Swachh Bharat Abhiyan (Health).pdf" target="_blank">Swachh Bharat</Link></li>
                                        </ul>
                                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                    <li className="dropdown"><Link to="#.">Complaints</Link>
                                        <ul>
                                            <li><Link to="https://aaplesarkar.mahaonline.gov.in/en" target="_blank">Aaple Sarkar</Link></li>
                                            <li><Link to="https://pgportal.gov.in/" target="_blank">P G Portal</Link></li>
                                            <li><Link to="https://rtionline.maharashtra.gov.in/RTIMIS/login/index.php" target="_blank">Right to Information</Link></li>
                                        </ul>
                                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="menu-right-content">

                            <div className="btn-box">
                                <Link to="#." className="header-btn">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--sticky Header--> */}
            <div className="sticky-header">
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link to="#.">
                                {/* <img src={img4} alt="logo" /> */}
                            </Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                {/* <!--Keep This Empty / Menu will come through Javascript--> */}

                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current"><Link to="index.php">Home</Link> </li>
                                        <li className="dropdown"><Link to="#.">About KBMC</Link>
                                            <ul>
                                                <li><Link to="/history">History</Link></li>
                                                <li><Link to="ward.php">Wards</Link></li>
                                                <li><Link to="elected-member.php">Elected Wing</Link></li>
                                                <li><Link to="org-structure.php">Organization Structure</Link></li>
                                                <li><Link to="functions.php">Functions</Link></li>
                                                <li><Link to="departments.php">Departments</Link></li>
                                                <li><Link to="elected-pre-officer.php">Previous Chief Officers</Link></li>
                                                <li><Link to="elected-pre-representative.php">Previous Presidents</Link></li>
                                                <li><Link to="awards.php">Awards</Link></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                        {/* <!-- <li className="no-arrow"><Link to="act.php">Act</Link> </li> --> */}
                                        <li className="dropdown"><Link to="#.">City Profile</Link>
                                            <ul>
                                                <li><Link to="assets/documents/KBMC CIRCULATION A3 COLOR-Brown-24 (1).pdf" target="_blank">Areas </Link></li>
                                                <li><Link to="property-holder.php">Property Holder</Link></li>
                                                <li><Link to="properties_milkat.php">Muncipal Properties</Link></li>
                                                <li><Link to="schools.php">Schools</Link></li>
                                                <li><Link to="gardens.php">Gardens</Link></li>
                                                <li><Link to="electric.php">Electric</Link></li>
                                                <li><Link to="roads.php">Roads</Link></li>
                                                <li><Link to="tree-census.php">Tree Census</Link></li>
                                                <li><Link to="health.php">Health</Link></li>
                                                <li><Link to="ponds-talao.php">Ponds / Talao</Link></li>
                                                <li><Link to="fire-station.php">Fire Station</Link></li>
                                                <li><Link to="private_hospital.php">Private Hospital</Link></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                        <li className="dropdown"><Link to="#.">Online Services</Link>
                                            <ul>
                                                <li><Link to="https://mahaulb.in/MahaULB/property/propertyOnlinePay" target="_blank">Property Tax Payment</Link></li>
                                                <li><Link to="https://mahaulb.in/MahaULB/property/onlineReceiptReprint" target="_blank">Property Tax Receipt</Link></li>
                                                <li><Link to="https://mjp.maharashtra.gov.in/pay-water-bill-online/" target="_blank">Water Tax Payment</Link></li>
                                                <li><Link to="https://crsorgi.gov.in/web/index.php/auth/login" target="_blank">Birth &amp; Death Search </Link></li>
                                                <li><Link to="https://mahatenders.gov.in/nicgep/app" target="_blank">Online Tenders</Link></li>
                                                <li><Link to="https://maha.autodcr.com/BPAMSClient/Default.aspx" target="_blank">Auto DCR</Link></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                        <li className="dropdown"><Link to="#.">Schemes</Link>
                                            <ul>
                                                <li><Link to="assets/documents/Nulm_mahiti.pdf" target="_blank">NULM</Link></li>
                                                <li><Link to="pmay.php">PMAY</Link></li>
                                                <li><Link to="nuhm.php">NUHM</Link></li>
                                                <li><Link to="amrut.php">AMRUT</Link></li>
                                                <li><Link to="assets/documents/Swachh Bharat Abhiyan (Health).pdf" target="_blank">Swachh Bharat</Link></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                        {/* <!-- <li className="no-arrow"><Link to="#.">Schemes</Link></li>  --> */}
                                        {/* <!-- <li className="no-arrow"><Link to="elected-pre-officer.php">Previous Officer</Link></li> --> */}
                                        <li className="dropdown"><Link to="#.">Complaints</Link>
                                            <ul>
                                                <li><Link to="https://aaplesarkar.mahaonline.gov.in/en" target="_blank">Aaple Sarkar</Link></li>
                                                <li><Link to="https://pgportal.gov.in/" target="_blank">P G Portal</Link></li>
                                                <li><Link to="https://rtionline.maharashtra.gov.in/RTIMIS/login/index.php" target="_blank">Right to Information</Link></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="menu-right-content">
                                <div className="search-box">
                                    <div className="search-box-outer search-toggler"><img src={img5} alt="" /></div>
                                </div>
                                {/* <!-- <div className="option-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt=""></div>
                                <div className="select-box">
                                    <select className="selectmenu">
                                        <option>Login</option>
                                        <option>Logout</option>
                                    </select>
                                </div>
                            </div> --> */}
                                <div className="btn-box">
                                    <Link to="#." className="header-btn">Administration Chief</Link>
                                </div>
                                <div className="language-box">
                                    {/* <!-- <div className="flag"><img src="assets/images/indian-flag.png" alt="indian-flag"></div> --> */}
                                    <div className="select-box">
                                        <select className="selectmenu" style={{ display: 'none' }}>
                                            <option>English</option>
                                            <option>Marathi</option>
                                        </select><div className="nice-select selectmenu" tabindex="0"><span className="current">English</span><ul className="list"><li data-value="English" className="option selected">English</li><li data-value="Marathi" className="option">Marathi</li></ul></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header