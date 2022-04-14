import "./PeopleBody.css";

const PeopleBody = () => {
    return (
        <div id="peopleBody">
            <div className="container-fluid subpageHeading">
                <div className="container" style={{overflow: "auto"}}>
                    <h1 className="py-4">
                        Lab Head - XXXXXXX
                    </h1>
                </div>
            </div>
            <div className="container-fluid text-center" style={{backgroundColor: 'black' }}>
                <div className="container">
                    <img src="people.jpg" className="img-fluid" alt="book" />
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-4">
                    <h1>Lab Members:</h1>
                </div>
                <div className="container" style={{overflow: "auto"}}>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <h3>Ph.D</h3>
                                <a type="button" className="btn btn-outline-dark package" href="">List of Students</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h3>PG</h3>
                                <a type="button" className="btn btn-outline-dark package" href="">List of Students</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h3>B.Tech</h3>
                                <a type="button" className="btn btn-outline-dark package" href="">List of Students</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h3>Alumni</h3>
                                <a type="button" className="btn btn-outline-dark package" href="">List of Students</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeopleBody;