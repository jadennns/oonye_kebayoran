import { useRouter } from "next/router";
import { AllMenu, Kopi, Pisang } from "../lib/data";

export default function Menus() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div className="flex flex-col space-y-4">
      {q && (
        <>
          <h1 className="text-primary-3 text-4xl font-semibold">
            Results for : {q}
          </h1>
          <div className="grid grid-cols-1 1 lg:grid-cols-3 gap-6">
            {AllMenu.filter((menu) =>
              menu.name.toLowerCase().includes((q as string).toLowerCase())
            ).map((item, index) => (
              <MenuItem item={item} key={index + 1} />
            ))}
          </div>
        </>
      )}
      {!q && (
        <>
          <h1 className="text-primary-3 text-4xl font-semibold">
            Pisang Goreng
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Pisang.map((item, index) => (
              <MenuItem item={item} key={index + 1} />
            ))}
          </div>
          <h1 className="text-primary-3 text-4xl font-semibold">Kopi Oonye</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Kopi.map((item, index) => (
              <MenuItem item={item} key={index + 1} />
            ))}
          </div>
          <h1 className="text-primary-3 text-4xl font-semibold">Non Coffee</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Kopi.map((item, index) => (
              <MenuItem item={item} key={index + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function MenuItem({
  item,
}: {
  item: {
    name: string;
    img: string;
    desc: string;
    price: string;
  };
}) {
  return (
    <div className="border-2 trans-grow border-gray-600 rounded-md p-4 w-[20rem] lg:w-[25rem] h-[12rem] lg:h-[10rem]">
      <div className="flex items-start space-x-4">
        <img
          src={item.img}
          alt={item.name}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="flex flex-col space-y-1">
          <h2 className="text-primary-3 font-semibold text-lg">{item.name}</h2>
          <p className="text-sm text-gray-700">{item.desc}</p>
          <span className="text-primary-3 font-bold text-xl">{item.price}</span>
        </div>
      </div>
    </div>
  );
}
