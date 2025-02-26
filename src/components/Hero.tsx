import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex justify-between items-center   pt-10 pb-48 ">
      <div className="flex flex-col gap-12  max-w-[50%] max-lg:max-w-[100%]">
        <h1 className="font-bold text-6xl max-lg:text-4xl ">
          GET DELICIOUS FOOD AT YOUR DOORSTEPS{" "}
        </h1>
        <p className="text-gray-300 font-bold md:max-w-[75%] max-md:max-w-full">
          Craving something delicious? 🍔🍕🥗 Get your favorite meals delivered
          hot and fresh, right to your doorstep! Explore a variety of
          mouthwatering dishes from top restaurants and order in just a few
          clicks. Fast, easy, and satisfying – because great food should never
          be a hassle. 🚀
        </p>
        <Link
          href="/restaurants"
          className="bg-buttonbg  rounded-xl w-fit text-sm p-4 max-md:mx-24 "
        >
          Order Now
        </Link>
      </div>
      <div className="backdrop-blur-3xl bg-gradient-to-b from-white/20 to-transparent rounded-3xl -left-px-30 max-lg:-left-px-0 border border-slate-500 max-lg:w-full max-md:hidden ">
        <Image
          src="/burger.svg"
          alt="burger"
          width={600}
          height={600}
          className="-ml-24 max-lg:-ml-12 max-md:hidden"
          priority
        />
      </div>
    </div>
  );
}
