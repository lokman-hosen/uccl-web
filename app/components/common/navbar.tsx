import Link from "next/link";

function Navbar() {
    return (
        <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand position-absolute" href="index.html">
                        <img src="img/profile/uccl_logo.png" width="140"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="navbarsExample05">
                        <ul className="navbar-nav mx-auto pl-lg-5 pl-0 d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html" id="index">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="project" id="project">Projects</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="equipment.html" id="equipment">Machineries & Equipment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="organogram.html" id="organogram">Organogram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html" id="about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html" id="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;
