import "./Publications.css";

const Publications = () => {
    return (
        <div>
            <div className="container-fluid subpageHeading">
                <div className="container" style={{ overflow: "auto" }}>
                    <h1 className="py-4">
                        Publications and Work
                    </h1>
                </div>
            </div>
            <div className="container-fluid text-center" style={{ backgroundColor: 'black' }}>
                <div className="container">
                    <img src="book.jpg" className="img-fluid" alt="book" />
                    {/* <img src="people.jpg" className="img-fluid" alt="book" /> */}
                </div>
            </div>
            {/* <div style={{ backgroundColor: 'black' }}>
                <div style={{ marginLeft: '180px', marginRight: '180px' }}>
                    
                </div>
            </div> */}
            <div className="container-fluid">
                <div className="container my-3">
                    <table className="table table-striped table-hover">
                        <tbody><tr>
                            <th>Year</th>
                            <th>Type</th>
                            <th>Publication</th>
                        </tr>
                            <tr>
                                <td>2022</td>
                                <td>Journal</td>
                                <td>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                                    accusamus saepe deleniti error tempore maiores itaque, molestias,
                                    voluptatem facere placeat vero voluptates assumenda quidem rem
                                    dolores molestiae similique eaque nobis.
                                </td>
                            </tr>
                            <tr>
                                <td>2022</td>
                                <td>Journal</td>
                                <td>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                                    accusamus saepe deleniti error tempore maiores itaque, molestias,
                                    voluptatem facere placeat vero voluptates assumenda quidem rem
                                    dolores molestiae similique eaque nobis.
                                </td>
                            </tr>
                            <tr>
                                <td>2022</td>
                                <td>Journal</td>
                                <td>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                                    accusamus saepe deleniti error tempore maiores itaque, molestias,
                                    voluptatem facere placeat vero voluptates assumenda quidem rem
                                    dolores molestiae similique eaque nobis.
                                </td>
                            </tr>
                            <tr>
                                <td>2022</td>
                                <td>Journal</td>
                                <td>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                                    accusamus saepe deleniti error tempore maiores itaque, molestias,
                                    voluptatem facere placeat vero voluptates assumenda quidem rem
                                    dolores molestiae similique eaque nobis.
                                </td>
                            </tr>
                            <tr>
                                <td>2022</td>
                                <td>Journal</td>
                                <td>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                                    accusamus saepe deleniti error tempore maiores itaque, molestias,
                                    voluptatem facere placeat vero voluptates assumenda quidem rem
                                    dolores molestiae similique eaque nobis.
                                </td>
                            </tr>
                            <tr>
                                <td>2022</td>
                                <td>Journal</td>
                                <td>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                                    accusamus saepe deleniti error tempore maiores itaque, molestias,
                                    voluptatem facere placeat vero voluptates assumenda quidem rem
                                    dolores molestiae similique eaque nobis.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Publications;