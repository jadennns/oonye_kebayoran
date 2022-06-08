import { AiFillStar } from "react-icons/ai";

export default function StatsSection() {
  return (
    <div className="h-[20rem] w-screen bg-primary-1 flex justify-center mt-5">
      <div className="flex items-center space-x-2 slide-in">
        <div className="flex flex-col items-center space-y-1 text-primary-3">
          <p className="font-semibold flex items-end space-x-1">
            <span className="text-5xl">4.9</span>
            <AiFillStar size={25} />
          </p>
          <p className="text-lg">Google score</p>
        </div>
      </div>
    </div>
  );
}
