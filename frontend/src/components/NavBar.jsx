function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container-xxl">
          <a href="#" className="navbar-brand ">
            <span className="fw-bold">My Store</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-expanded="false"
            aria-label="Toogle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
