import React from 'react'

const HomeAbout = () => {
    return (
        <>
             <section className="two">
        <div className="container">
            <div className="row pt-3">
                <div className="col-lg-7">
                    <div className="pt-4">
                        <h4>About Company</h4>
                        <h2 className="pt-2">
                            We're Truely Dedicated To Make Your Experience As Much As
                            Simple And Fun As Possible
                        </h2>
                        <p className="pt-2">
                            Welcome to the world of Service (PEST CONTROL) ,We are pleased to introduce ourselves
                            <b> UNIVERSAL PEST CONTROL AND FUMIGATION SERVICES</b> . We are the best
                            control services at economical cost with future promises.
                        </p>
                        <p>
                            We are skilled and our technicians are trained, we have rich experience from leading Pest
                            control companies.
                            Our chemicals are safe and non toxic for domestic use or safe for human being.we offer a
                            wide range of pest
                            control services
                        </p>
                    </div>
                </div>
                <div className="col-lg-5 pt-4">
                    <div className="gs-form shadow ">
                        <h3>Get a Quote</h3>

                        <form action="">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <label>Phone No.</label>
                                        <input type="text" className="form-control" placeholder="Phone No." />
                                    </div>
                                    <div className="col">
                                        <label>Email Id</label>
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <label>Solution</label>
                                        <select name="solution" className="form-control">
                                            <option>General Pest Control</option>
                                            <option>Cockroaches</option>
                                            <option>Ants</option>
                                            <option>Termites</option>
                                            <option>Bed Bugs</option>
                                            <option>Rodents</option>
                                            <option>Ticks</option>
                                            <option>Mosquitoes</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label>City</label>
                                        <input type="number" className="form-control" name="city" placeholder="Your City" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Find Now" className="btn gs-btn btn-lg" style={{width: "100%"}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default HomeAbout
