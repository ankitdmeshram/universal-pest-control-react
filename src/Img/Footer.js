import React from 'react'

import logo_white from '../Img/logo-white.png';

const Footer = () => {
    return (
        <>
               <footer>
        <div className="container">

            <div className="row">
                <div className="col-lg-3">
                    <img src={logo_white} className="img-fluid" />
                    <p>Universal Pest Control established in (Year) with sole interest in pest management business in
                        India.
                    </p>
                   
                </div>


                <div className="col-lg-4 gs-pl-4">
                    <div className="gs-pl-4">
                        <h4>Services</h4>
                        <ul>
                            <li>
                                <a href="termite-control.html">    Termite control</a>
                            </li>
                            <li>
                                <a href="general-pest-control.html">General Pest Services</a>
                            </li>
                            <li>
                                <a href="fogging-services-mosquitoes.html">Fogging Services</a>
                            </li>
                            <li>
                                <a href="sanitization.html">Sanitization</a>
                            </li>
                            <li>
                                <a href="birds-control.html">Birds Control</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>


                <div className="col-lg-4 gs-pl-4">
                    <h4>
                        Contacts
                    </h4>
                    <p className="pt-3"> <img src="icon/location.png" className="img-fluid ico" alt="phone" />&nbsp ward no.6/A,Near DAV School,
                        VFS Market,office no 60,Adipur
                        Gandhidham(KUTCH) 370 205</p>
                    <p> <a href="tel:+919909723817"> <img src="icon/phone-call.png" className="img-fluid ico" alt="phone" />&nbsp +91 99097 23817</a></p>
                    <p> <a href="mailto:universalpestandfumigation@gmail.com"> <img src="icon/email.png" className="img-fluid ico" alt="phone" /> &nbsp universalpestandfumigation@gmail.com </a></p>
                </div>


            </div>

        </div>
    </footer>
 
        </>
    )
}

export default Footer
