import { useMediaQuery } from "react-responsive";

export default function Story() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? (
    <section id="about" className="w-screen bg-primary-2 h-[30rem]">
      <div className="flex flex-col justify-center mt-20 items-center space-x-10 slide-in">
        <img
          src="/bananas/CoolBanana.png"
          alt="Cool Banana"
          width={256}
          height={256}
        />
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-primary-3 font-bold text-4xl">Our story</h1>
          <p className="text-gray-900 text-lg w-[20rem] lg:w-[30rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eum fugit officia animi, ad voluptatem quas suscipit. Fugit ut
            dignissimos veritatis quia in recusandae quidem molestias sunt,
            voluptatibus numquam ullam.
          </p>
        </div>
      </div>
    </section>
  ) : (
    <section id="about" className="w-screen bg-primary-2 h-[30rem]">
      <div className="flex justify-center mt-20 items-center space-x-10 slide-in">
        <img
          src="/bananas/CoolBanana.png"
          alt="Cool Banana"
          width={256}
          height={256}
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-primary-3 font-bold text-4xl">Our story</h1>
          <p className="text-gray-900 text-lg w-[30rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eum fugit officia animi, ad voluptatem quas suscipit. Fugit ut
            dignissimos veritatis quia in recusandae quidem molestias sunt,
            voluptatibus numquam ullam.
          </p>
        </div>
      </div>
    </section>
  );
}
