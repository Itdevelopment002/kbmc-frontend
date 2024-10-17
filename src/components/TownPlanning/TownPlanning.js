import React from 'react'
import { Link } from 'react-router-dom';
import innerBanner from '../../assets/images/banner/inner-banner.jpg';
import badlapurDp from '../../assets/images/town-planning/BADLAPUR-D-all-dp.jpg';
import mankivaliImage from '../../assets/images/town-planning/01-Mankivali.jpg';
import badlapur1Image from '../../assets/images/town-planning/02-Badlapur-1.jpg';
import katrapImage from "../../assets/images/town-planning/03-Katrap.jpg";
import Joveli from "../../assets/images/town-planning/04-Joveli.jpg";
import yernzad from "../../assets/images/town-planning/05-Yernzad.jpg"
import badalpur2 from '../../assets/images/town-planning/06-Badlapur-2.jpg'
import valvili from "../../assets/images/town-planning/07-Valivli.jpg"
import belavali from "../../assets/images/town-planning/08-Belavali.jpg"
import manjarli from "../../assets/images/town-planning/09-Manjarli.jpg"
import sanavali from "../../assets/images/town-planning/10-Sonivali.jpg"
import kharvai from '../../assets/images/town-planning/11-Kharvai.jpg'
import shirgaon from '../../assets/images/town-planning/12-Shirgaon-2.jpg'
import shirgaon2 from '../../assets/images/town-planning/13-Shirgaon-02.jpg'
import kulgaon from "../../assets/images/town-planning/14-Kulgaon.jpg"

const TownPlanning = () => {
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
                <h1>Town Planning Department</h1>
                <ul className="bread-crumb clearfix">
                    <li><Link to="departments.php">Departments</Link></li>
                    <li><span>Town Planning Department</span></li>
                </ul>
            </div>
        </div>
    </section>
    <br/>

    <section className="departments-style-two alternat-2" id="town-planning">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                    <div className="department-details-content">
                        <div className="content-one">
                            <div className="title-box">                                
                                <h3>Town Planning Department</h3>
                            </div>
                            <div className="text-box">
                                <p>The Urban Planning Department is responsible for creating land use policies, zoning regulations, and development plans to ensure organized and sustainable growth of the city or town. This department plays a crucial role in shaping the future growth and development of urban areas. They work on creating plans and policies that promote sustainable, well-organized, and comprehensive growth, while also taking into consideration the environment and community interests. Typically, this department consists of urban planners, landscape architects, engineers, and other professionals who collaborate to develop comprehensive plans for the future development of the community.</p>
                            </div>
                        </div><br/>
                        <div className="content-box">
                            <div className="row">
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/BADLAPUR-D-all-dp.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="">
                                        <img src={badlapurDp} classNameName="img-fluid" alt="Badlapur" />
                                        <h6 className="text-center">Badlapur</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/BADLAPUR-D-all-dp.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/01-Mankivali.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="">
                                        <img src={mankivaliImage} className="img-fluid" alt='mankivali'/>
                                        <h6 className="text-center">Mankivali</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/01-Mankivali.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/02-Badlapur-1.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={badlapur1Image} className="img-fluid"alt='badalpurImage' />
                                        <h6 className="text-center">Badlapur</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/02-Badlapur-1.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/03-Katrap.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={katrapImage} className="img-fluid" alt='KatrapImage' />
                                        <h6 className="text-center">Katrap</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/03-Katrap.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/04-Joveli.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={Joveli} className="img-fluid" alt='Joveli' />
                                        <h6 className="text-center">Joveli</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/04-Joveli.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/05-Yernzad.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={yernzad} className="img-fluid" alt='yernzad' />
                                        <h6 className="text-center">Yernzad</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/05-Yernzad.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/06-Badlapur-2.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={badalpur2} className="img-fluid" alt='badalpur2'/>
                                        <h6 className="text-center">Badlapur</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/06-Badlapur-2.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/07-Valivli.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={valvili} className="img-fluid" alt='valviliimage' />
                                        <h6 className="text-center">Valivli</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/07-Valivli.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/08-Belavali.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={belavali} className="img-fluid" alt={belavali}/>
                                        <h6 className="text-center">Belavali</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/08-Belavali.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/09-Manjarli.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={manjarli} className="img-fluid" alt='manjarli' />
                                        <h6 className="text-center">Manjarli</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/09-Manjarli.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/10-Sonivali.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={sanavali} className="img-fluid"  alt='sanavali'/>
                                        <h6 className="text-center">Sonivali</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/10-Sonivali.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/11-Kharvai.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={kharvai} className="img-fluid" alt='kharvai' />
                                        <h6 className="text-center">Kharvai</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/11-Kharvai.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/12-Shirgaon-2.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={shirgaon} className="img-fluid" alt='shirgaon' />
                                        <h6 className="text-center">Shirgaon</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/12-Shirgaon-2.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/13-Shirgaon-02.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={shirgaon2} className="img-fluid" alt='shirgaon2'/>
                                        <h6 className="text-center">Shirgaon</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/13-Shirgaon-02.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                                <div className="col-lg-3 town_plan">
                                    <Link to="../../assets/images/town-planning/14-Kulgaon.jpg" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-3">
                                        <img src={kulgaon} className="img-fluid" alt='kulgaon'/>
                                        <h6 className="text-center">Kulgaon</h6>
                                    </Link>
                                    <div className="pdf-dwnl"><Link to="../../assets/images/town-planning/pdf/14-Kulgaon.pdf" download="" target="_blank"><i className="fa fa-download"></i></Link></div>
                                </div>
                            </div>
                        </div>
                                           
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                    <div className="department-sidebar">
                        <div className="category-widget">
                            
                            <div className="widget-content">
                                <ul className="category-list clearfix">
                                    <li> <Link to="general-admin-dept.php">General Admin Department</Link></li>
                                    <li> <Link to="audit-dept.php">Audit Department</Link></li>
                                    <li> <Link to="/tax-department">Tax Department</Link></li>
                                    <li> <Link to="/account-department">Account Department</Link></li>
                                    <li> <Link to="/town-planning">Town Planning</Link></li>
                                    <li> <Link to="/electrical-department">Electrical Department</Link></li>
                                    <li> <Link to="/public-work-department">Public Work Department (PWD)</Link></li>
                                    <li> <Link to="income-dept.php">Milkat (Income)</Link></li>
                                    <li> <Link to="egovernance-dept.php">E-Governance Department</Link></li>
                                    <li> <Link to="/health-department">Health Department</Link></li>
                                    <li> <Link to="wcd.php">WCD (Women and Child Development)</Link></li>
                                    <li> <Link to="advertisement-dept.php">Advertisement Department</Link></li>
                                    <li> <Link to="/education-department">Education Department</Link></li>
                                    <li> <Link to="#.">Security Department</Link></li>
                                    <li> <Link to="vehicle-dept.php">Vehicle Department</Link></li>
                                    <li> <Link to="/nulm-department">NULM Department</Link></li>
                                    <li> <Link to="/hospital-department">Hospital Department</Link></li>
                                    <li> <Link to="/fire-department">Fire Department</Link></li>
                                    <li> <Link to="legal-dept.php">Legal Department</Link></li>
                                    <li> <Link to="disability-welfare-dept.php">Disability Welfare</Link></li>
                                    <li> <Link to="#.">Store &amp; Records Department</Link></li>
                                    <li> <Link to="#.">Marriage Registration</Link></li>
                                    <li> <Link to="/birth-death-department">Birth &amp; Death Department</Link></li>
                                </ul>
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

export default TownPlanning