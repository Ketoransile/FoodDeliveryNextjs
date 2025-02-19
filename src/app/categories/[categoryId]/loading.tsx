import { Skeleton } from "@/components/ui/skeleton";

export default function CateogryDetailPageLoader() {
  return (
    <div className="flex flex-col gap-8 pt-12">
      {/* Category Title Skeleton */}
      <Skeleton className="h-8 w-48 rounded bg-gray-300" />

      {/* Food Grid Skeleton */}
      <div className="grid grid-cols-4 gap-8">
        {Array(8) // Adjust number of skeleton cards as needed
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    </div>
  );
}
function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-full rounded-xl bg-gray-300" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-[80%] bg-gray-300" />
      </div>
    </div>
  );
}
