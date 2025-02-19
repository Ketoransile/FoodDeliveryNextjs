import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex justify-between items-center   pt-10 pb-48">
      <div className="flex flex-col gap-12  max-w-[50%]">
        <h1 className="font-bold text-6xl ">
          GET DELICIOUS FOOD AT YOUR DOORSTEPS{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          cupiditate, ducimus illum, odio numquam, praesentium a cum libero unde
          ea consequuntur fuga deserunt. Quidem porro amet officia, officiis eos
          excepturi.
        </p>
        <Link
          href="/restaurants"
          className="bg-buttonbg  rounded-xl w-fit text-sm p-4 "
        >
          Order Now
        </Link>
      </div>
      <div className="backdrop-blur-3xl bg-gradient-to-b from-white/10 to-transparent rounded-3xl -left-px-30 border border-slate-500  ">
        <Image
          src="/burger.svg"
          alt="burger"
          width={600}
          height={600}
          className="-ml-32"
          priority
        />
      </div>
    </div>
  );
}
