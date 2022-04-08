const PeopleBody = () => {
    return (
        <div id="peopleBody">
            <div style={{ backgroundColor: 'antiquewhite' }}>
                <h1 style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: '10%' }}>
                    Lab Head-XXXXXXX
                </h1>
            </div>
            <div style={{ textAlign: 'center', backgroundColor: 'black' }}>
                <img src="static/people.jpg" className="img-fluid" alt="book" />
            </div>
            <div style={{ textAlign: 'left', fontSize: '40px' }} className="container-fluid">
                <p>Lab Members:</p>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <h3>Ph.D</h3>
                        <a type="button" className="btn btn-outline-dark package" href>List of Students</a>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3>PG</h3>
                        <a type="button" className="btn btn-outline-dark package" href>List of Students</a>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3>B.Tech</h3>
                        <a type="button" className="btn btn-outline-dark package" href>List of Students</a>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3>Alumni</h3>
                        <a type="button" className="btn btn-outline-dark package" href>List of Students</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeopleBody;