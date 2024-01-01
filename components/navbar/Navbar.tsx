"use client";

import { SafeUser } from "@/types";
import Container from "../Container";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Header from "../Header";
import Banner from "../Banner";
type Props = {
  currentUser?: SafeUser | null;
};
const searchStyle = {
  backgroundImage: 'search-bg.webp',
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
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Search/>
          </div>
      </section>
    </>
  );
}

export default Navbar;
