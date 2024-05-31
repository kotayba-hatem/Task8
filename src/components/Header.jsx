import logo from '../../public/images/logo.svg';



const Header = () => {
  return (
    <header>
    <div>
        <img src={logo} alt="Focal X Logo" />
        <p>Digital marketing agency</p>
    </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

