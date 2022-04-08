const Contact = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'antiquewhite' }}>
                <h1 style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: '10%' }}>
                    Contact Us
                </h1>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="static/dummy.jpeg" style={{ height: '200px', width: '250px', marginBottom: '40px' }} />
                        <h2>Dr. Puneet Gupta</h2>
                        <p>Associate Professor</p>
                        <p>Indian Institute of Technology Indore</p>
                        <p>puneet@iiti.ac.in</p>
                        <p>Contact no. +91 732-430-6805</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="static/dummy.jpeg" style={{ height: '200px', width: '250px', marginBottom: '40px' }} />
                        <h2>XXXX</h2>
                        <p>XXXX</p>
                        <p>Indian Institute of Technology Indore</p>
                        <p>XXXX</p>
                        <p>Contact no. +91 XXX</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="static/dummy.jpeg" style={{ height: '200px', width: '250px', marginBottom: '40px' }} />
                        <h2>XXXX</h2>
                        <p>XXXX</p>
                        <p>Indian Institute of Technology Indore</p>
                        <p>XXXX</p>
                        <p>Contact no. +91 XXX</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;