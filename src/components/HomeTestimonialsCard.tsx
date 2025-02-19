import Image from "next/image";

export default function HomeTestimonialsCard({ customer }) {
  const { name, review, image } = customer;
  return (
    <div className="flex flex-col p-8 gap-10 max-h-80 min-h-80   text-white backdrop-blur-3xl bg-white/10 rounded-lg border border-slate-600">
      <div className="flex justify-between items-center">
        <Image
          src={image}
          alt="user"
          className=" w-[100px] h-[100px] rounded-full object-cover   "
          width={60}
          height={60}
          priority
        />
        <h1 className="font-bold text-white">{name}</h1>
      </div>
      <p className="text-slate-200 text-base  overflow-y-auto">{review}</p>
    </div>
  );
}
