import { UnitSwitcher } from '../../components';
import logo from '../../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='container header-content'>
	<img src={logo} alt='Weather Now logo' />
	<UnitSwitcher />
      </div>
    </header>
  );
}
