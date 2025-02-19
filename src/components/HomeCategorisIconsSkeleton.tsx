import { Skeleton } from "../components/ui/skeleton";

export default function HomeCategorisIconsSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <Skeleton className="h-6 w-80 rounded-md bg-slate-500" />
      </div>
      <div className="flex justify-between items-center ">
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
      </div>
    </div>
  );
}
