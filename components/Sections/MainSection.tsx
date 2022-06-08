import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

export default function MainSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? (
    <div className="flex flex-col items-center space-x-20 slide-in">
      <div className="flex flex-col items-center space-y-10">
        <Header1 />
        <div className="flex flex-col space-y-4 items-center space-x-6">
          <OrderNow />
          <Menu />
        </div>
      </div>
      <img
        src="/bananas/SuperBanana.png"
        alt="HEHEEH"
        width={256}
        height={256}
      />
    </div>
  ) : (
    <div className="flex items-center space-x-20 slide-in">
      <div className="flex flex-col space-y-10">
        <Header1 />
        <div className="flex items-center space-x-6">
          <OrderNow />
          <Menu />
        </div>
      </div>
      <img
        src="/bananas/SuperBanana.png"
        alt="HEHEEH"
        width={256}
        height={256}
      />
    </div>
  );
}

function OrderNow() {
  return (
    <Link
      href={
        "https://gofood.co.id/jakarta/restaurant/oonye-pisang-kriuk-kopi-kebayoran-c3d50b90-7359-4c56-8b1c-8cfc32f3c32d"
      }
    >
      <div className="flex items-center space-x-6 rounded-full shadow-2xl  bg-primary-4 group cursor-pointer trans-grow">
        <p className="text-white font-semibold px-4 text-lg">Order Now</p>
        <div className="rounded-full p-4 group-hover:bg-[#d93e16]">
          <BsArrowRight className="text-gray-200" size={25} />
        </div>
      </div>
    </Link>
  );
}

function Menu() {
  return (
    <Link href={"/menu"}>
      <div className="flex items-center space-x-6 rounded-full shadow-2xl  bg-white group cursor-pointer trans-grow">
        <p className="text-gray-900 font-semibold px-6 text-lg">Menu</p>
        <div className="rounded-full p-4 group-hover:bg-gray-100">
          <BsArrowRight className="text-gray-900" size={25} />
        </div>
      </div>
    </Link>
  );
}

function Header1() {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-primary-3 font-bold text-2xl lg:text-5xl">
        Oonye Kebayoran
      </h1>
      <p className="text-gray-600 w-[20rem] lg:w-[40rem] text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        neque autem ratione, consequuntur quae deserunt voluptatibus odio labore
        nostrum adipisci minus voluptas odit ipsa similique nam! Illo mollitia
        provident laborum.
      </p>
    </div>
  );
}
