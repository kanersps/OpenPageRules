import DomainSelector from "./domain-selector";
import Profile from "./profile";
import style from "./style.css";

const Header = () => {
  return <div class={style.header}>
    <DomainSelector />
    
    <Profile />
  </div>
}

export default Header;