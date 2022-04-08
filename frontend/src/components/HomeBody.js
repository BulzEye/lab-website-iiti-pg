const HomeBody = () => {
    return (
        <div id="homeBody">
            {/* Page Content */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={2000}>
                        <img src="home.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src="home.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src="home.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div style={{ display: 'flex' }} className="container-fluid">
                <div id="aboutlab">
                    <h2 className="labhead1">About the Lab</h2>
                    <div style={{ padding: '0px 20px' }}>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
                            necessitatibus neque illo, pariatur doloremque obcaecati distinctio id eius vero vel sed
                            exercitationem iste. Id quaerat, distinctio eveniet natus ullam deserunt!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint dolor optio fuga voluptatibus
                            cumque animi molestias quas alias sequi, debitis porro distinctio velit cupiditate eaque repellat
                            officia. Placeat, hic!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente accusamus numquam facere
                            veniam nesciunt enim, animi quo sed. Officiis pariatur velit magni necessitatibus provident,
                            molestiae delectus tempore illo unde.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum ab voluptate nam vero
                            eaque consequatur. Ad quam quod laborum! Molestias veniam fugiat reiciendis sunt ducimus vero beatae
                            voluptatum nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel soluta explicabo, modi nobis sed
                            suscipit beatae cum, similique quasi deleniti corrupti. Perspiciatis fuga ut deleniti voluptas, modi
                            labore dolorum!</p>
                    </div>
                </div>
                <div style={{ width: '2000px', margin: '50px 20px', marginRight: '14%', border: '3px solid black' }}>
                    <h2 className="labhead2">News</h2>
                    <div style={{ padding: '0px 20px' }}>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Numquam
                            necessitatibus neque illo, pariatur doloremque obcaecati distinctio id eius vero vel sed
                            exercitationem iste. <br />Id quaerat, distinctio eveniet natus ullam deserunt!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quisquam sint dolor optio fuga voluptatibus
                            cumque animi molestias quas alias sequi, debitis porro distinctio velit cupiditate eaque repellat
                            officia. Placeat, hic!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;