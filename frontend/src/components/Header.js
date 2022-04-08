const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="static/logo.jpeg" alt="..." height={36} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="home.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="people.html">People Section</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="publications.html">Publication and Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="awards.html">Awards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;