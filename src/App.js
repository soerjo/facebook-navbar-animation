import "./styles/navbar/nav.scss";
import { PlusIcon, BellIcon, MessageIcon, DownIcon } from "./image/img";
import { Navbar } from "./components/Navbar";
import { MenuIcon } from "./components/MenuIcon";
import { Dropdown } from "./components/Dropdown";

function App() {
  return (
    <>
      <Navbar>
        <MenuIcon icon={<PlusIcon />} />
        <MenuIcon icon={<BellIcon />} />
        <MenuIcon icon={<MessageIcon />} />
        <MenuIcon icon={<DownIcon />}>
          {/* buat sebuah komponen dropdown */}
          <Dropdown />
        </MenuIcon>
      </Navbar>
    </>
  );
}

export default App;
