const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <a href="#">Rnt Costume</a>
        </div>
        <div>
          {/* <button type="button" id="hamburger">
        <span></span>
      </button> */}
          <nav id="nav-menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
