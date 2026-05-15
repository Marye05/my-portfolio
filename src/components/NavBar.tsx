export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a className="navbar-logo" href="/">LOGO</a>
                <div className="navbar-actions">
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <a className="nav-button" href="#contact">Let's Connect</a>
                </div>
            </div>
        </nav>
    );
}