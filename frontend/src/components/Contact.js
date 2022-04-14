import "./Contact.css";

const Contact = () => {
    return (
        <div id="contactsPage">
            <div className="container-fluid subpageHeading">
                <div className="container" style={{overflow: "auto"}}>
                    <h1 className="py-4">
                        Contact Us
                    </h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container" style={{paddingTop: "20px"}}>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="dummy.jpeg" style={{ height: '200px', width: '250px', marginBottom: '40px' }} />
                                <h2>Dr. Puneet Gupta</h2>
                                <p>Associate Professor</p>
                                <p>Indian Institute of Technology Indore</p>
                                <p>puneet@iiti.ac.in</p>
                                <p>Contact no. +91 732-430-6805</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="dummy.jpeg" style={{ height: '200px', width: '250px', marginBottom: '40px' }} />
                                <h2>XXXX</h2>
                                <p>XXXX</p>
                                <p>Indian Institute of Technology Indore</p>
                                <p>XXXX</p>
                                <p>Contact no. +91 XXX</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="dummy.jpeg" style={{ height: '200px', width: '250px', marginBottom: '40px' }} />
                                <h2>XXXX</h2>
                                <p>XXXX</p>
                                <p>Indian Institute of Technology Indore</p>
                                <p>XXXX</p>
                                <p>Contact no. +91 XXX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;