import React from 'react'

const PopupForm = () => {
    return (
        <>
              <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog two " role="document">
            <div className="modal-content">

            <div className="gs-form shadow  bg-light">
                <h3>Book Now</h3>

                <form action="" >
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
                                <input type="text" className="form-control" name="city" placeholder="Your City" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Book Now" className="btn gs-btn btn-lg" style={{width: "100%"}} />
                    </div>
                </form>
            </div>
            </div>

        </div>
    </div>

        </>
    )
}

export default PopupForm
