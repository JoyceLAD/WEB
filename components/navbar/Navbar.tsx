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

function Navbar({ currentUser }: Props) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
      <Header/>
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
