import "./Awards.css";

const Awards = () => {
    return (
        <div id="contactsPage">
            <div className="container-fluid subpageHeading">
                <div className="container" style={{overflow: "auto"}}>
                    <h1 className="py-4">
                        Awards
                    </h1>
                </div>
            </div>
            {/* <div style={{ backgroundColor: 'antiquewhite' }}>
                <h1 style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: '10%' }}>
                    Awards
                </h1>
            </div> */}
            <div className="container-fluid">
                <div className="container" style={{paddingTop: "20px"}}>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="award.jpeg" style={{ height: '200px', width: '250px' }} />
                                <p>AWARD1</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="award.jpeg" style={{ height: '200px', width: '250px' }} />
                                <p>AWARD1</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="award.jpeg" style={{ height: '200px', width: '250px' }} />
                                <p>AWARD1</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src="award.jpeg" style={{ height: '200px', width: '250px' }} />
                                <p>AWARD1</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="award.jpeg" style={{ height: '200px', width: '250px' }} />
                                <p>AWARD1</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="award.jpeg" style={{ height: '200px', width: '250px' }} />
                                <p>AWARD1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;