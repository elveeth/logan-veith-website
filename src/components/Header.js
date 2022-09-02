import { Navbar, NavbarBrand } from 'reactstrap';
import MainLogo from '../app/assets/img/logo-lore.svg';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
          <NavbarBrand href='/'>
            <img src={MainLogo} alt='main logo' />
          </NavbarBrand>
      </Navbar>
    )
}

export default Header;