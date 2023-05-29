 function Footer() {
    return (
        <footer className="site-footer bg-dark" role="contentinfo">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <ul className="list-unstyled footer-link">
                            <li>
                                <h3 className="text-white">Contact</h3>
                                <span className="mr-3 d-block">Address:</span>
                                <span className="text-white">Grand Delvista, Plot 1A, Road # 113 , Level # 7, Gulshan Avenue, Dhaka 1212, Bangladesh.</span>
                            </li>
                            <li><span className="mr-3 d-block">Phone:</span><span className="text-white">+88 02 48814283-4</span></li>
                            <li><span className="mr-3 d-block">E-mail:</span><span className="text-white">
                        <a className="__cf_email__">info@ndeinfra.com</a>
                    </span></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h3 className="text-white">Quick Links</h3>
                        <ul className="list-unstyled footer-link text-white">
                            <li><a href="about.html">About</a></li>
                            <li><a href="project.html">Projects</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h3 className="text-white">Quick Links</h3>
                        <ul className="list-unstyled footer-link">
                            <li><a href="equipment.html">Equipment</a></li>
                            <li><a href="organogram.html">Organogram</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center"><p>Copyright &copy;2023 All rights reserved by UCCL</p></div>
            </div>
        </div>
 </footer>
    )
}
export default Footer;
