import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary-3 ">
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-x-0 space-y-4 p-14 lg:flex-row lg:space-x-72 lg:space-y-0">
            <div className="flex items-center space-x-3">
              <Link href={"/"}>
                <img
                  src="/OonyeLogo.png"
                  width={100}
                  height={100}
                  alt="Oonye Logo"
                  aria-label="Logo"
                />
              </Link>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white">
                  Oonye Kebayoran
                </h2>
                <span className="text-base text-gray-200">
                  Copyright © {new Date().getFullYear()} Oonye Kebayoran
                </span>
                <span data-ccpa-link="1"></span>
              </div>
            </div>
            <div className="flex space-x-6 lg:space-x-12">
              <FooterItems
                items={[
                  {
                    name: "About",
                    redirect: "#about",
                    tag: true,
                  },
                  {
                    name: "Menu",
                    redirect: "/menu",
                    tag: true,
                  },
                  {
                    name: "Contact",
                    redirect: `https://wa.me/081314156486?text=${encodeURIComponent(
                      "Selamat datang di Oonye Kebayoran. Jika ingin customer support, silakan chat whatsapp kami."
                    )}`,
                    tag: true,
                  },
                ]}
              />
              <FooterItems
                items={[
                  {
                    name: "Location",
                    redirect: "https://goo.gl/maps/fz472y6wDBPm7EeF8",
                  },
                ]}
              />
              <div className="lg:flex hidden items-center space-x-4 text-gray-200 hover:text-gray-300">
                <a href="https://www.instagram.com/oonye.kebayoran/">
                  <BsInstagram size={25} className="cursor-pointer" />
                </a>
                <a
                  href={`https://wa.me/081314156486?text=${encodeURIComponent(
                    "Selamat datang di Oonye Kebayoran. Jika ingin customer support, silakan chat whatsapp kami."
                  )}`}
                >
                  <BsWhatsapp size={25} className="cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="lg:hidden flex  items-center space-x-4 text-gray-200 hover:text-gray-300">
              <a href="https://www.instagram.com/oonye.kebayoran/">
                <BsInstagram size={25} className="cursor-pointer" />
              </a>
              <a
                href={`https://wa.me/081314156486?text=${encodeURIComponent(
                  "Selamat datang di Oonye Kebayoran. Jika ingin customer support, silakan chat whatsapp kami."
                )}`}
              >
                <BsWhatsapp size={25} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterItemsProps {
  items: {
    name: string;
    redirect: string;
    tag?: boolean;
  }[];
}

function FooterItems({ items }: FooterItemsProps) {
  return (
    <div className="flex flex-col space-y-1">
      {items.map(({ name, redirect, tag }, index) =>
        tag ? (
          <a
            href={redirect}
            className="cursor-pointer text-gray-200"
            key={index + 1}
          >
            {name}
          </a>
        ) : (
          <Link href={redirect} key={index + 1}>
            <span className="cursor-pointer text-gray-200">{name}</span>
          </Link>
        )
      )}
    </div>
  );
}
