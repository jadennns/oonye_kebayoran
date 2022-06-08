import Link from "next/link";
import { FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const [search, setSearch] = useState("Pisang Goreng");
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    location.replace("/menu?q=" + search);
  };

  return (
    <div className="flex items-center justify-center">
      <nav className="max-w-7xl flex items-center justify-between p-4 mt-0 lg:mt-5 lg:w-11/12 z-[1]">
        <div className="flex items-center space-x-[7rem]">
          <Link href={"/"}>
            <img
              src="/OonyeLogo.png"
              alt="Oonye Logo"
              width={64}
              height={64}
              className="cursor-pointer"
            />
          </Link>
          <div className="select-none space-y-4 relative">
            <div
              className="bg-primary-3 rounded-md p-2 text-white lg:hidden cursor-pointer"
              onClick={() => setOpenHamburger(!openHamburger)}
            >
              <BsList size={25} />
            </div>
            {openHamburger && (
              <div className="bg-primary-3 lg:hidden rounded-md px-2 py-2 flex flex-col space-y-2 z-50 absolute left-auto right-0 w-32 animate-growdown">
                <a href="#about" className="text-white text-base pl-2">
                  About
                </a>
                <Link href={"/menu"}>
                  <a className="text-white text-base pl-2">Menu</a>
                </Link>
              </div>
            )}
          </div>
          <div className="items-center space-x-6 hidden lg:flex">
            <a href="#about" className="text-primary-3 text-xl cursor-pointer">
              About
            </a>
            <Link href={"/menu"}>
              <a className="text-primary-3 text-xl cursor-pointer">Menu</a>
            </Link>
            <a
              href={`https://wa.me/081314156486?text=${encodeURIComponent(
                "Selamat datang di Oonye Kebayoran. Jika ingin customer support, silakan chat whatsapp kami."
              )}`}
              className="text-primary-3 text-lg cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="items-center space-x-2 bg-white px-2 py-2 hidden lg:flex">
          <AiOutlineSearch />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search your menu here"
              className="outline-none text-base"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
