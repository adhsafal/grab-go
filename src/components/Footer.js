import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footerSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contactUs">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><i class="fas fa-map-marker-alt"></i><span>Madhyapur Thimi-7, Bhaktapur, Nepal</span></li>
                                    <li><i class="fas fa-phone-alt"></i><span>Landline: 01-6630135</span></li>
                                    <li><i class="fas fa-headset"></i><span>Hotline: +9779860497192</span></li>
                                    <li><i class="fas fa-envelope"></i><span>gg.foodproduction@gmail.com</span></li>
                                    <li><i class="fas fa-globe"></i><span>www.ggfood.com.np</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="quickLinks">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>Our Services</li>
                                    <li>Our Product</li>
                                    <li>How It Works</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="socialLinks">
                                <h3>Social Links</h3>
                                <ul className='socialLinks'>
                                    <li><i class="fab fa-instagram"></i></li>
                                    <li><i class="fab fa-facebook"></i></li>
                                    <li><i class="fab fa-twitter"></i></li>
                                    <li><i class="fas fa-envelope"></i></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-md-3">
                            <img width='100%' src="map.png" alt="" /> 
                            <a href="https://www.facebook.com/profile.php?id=100064900005045"></a>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="footerBottom">
                <p>COPYRIGHT <span><i class="fas fa-circle"></i></span> 2022 GRAB & GO ON THE GO</p>
            </div>

        </>
    )
}

export default Footer