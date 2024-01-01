"use client";

import { SafeUser } from "@/types";
import Container from "../Container";
import Search from "./SearchBar";
import UserMenu from "./UserMenu";
import Header from "../Header";
import Banner from "../Banner";
type Props = {
  currentUser?: SafeUser | null;
};
const searchStyle = {
  backgroundImage: 'search-bg.webp',
  margin: '10px 250px 10px 120px'
}
const navStyles = {
  display: 'flex',
  marginRight: '50px'
};

const headerStyles = {
  backgroundColor: '#333',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between', // Dàn đều các thành phần theo chiều ngang
  alignItems: 'center', // Canh giữa theo chiều dọc
};

function Navbar({ currentUser }: Props) {
  return (
    <>
      <header style={headerStyles}>
        <Header />
        <nav style={navStyles}>
          <UserMenu currentUser={currentUser} />
        </nav>
      </header>
      <section>
          <div style={searchStyle}>
            <Search/>
          </div>
      </section>
    </>
  );
}

export default Navbar;
