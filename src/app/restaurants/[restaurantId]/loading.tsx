import { Skeleton } from "@/components/ui/skeleton";

export default function RestaurantDetailsPageSkeleton() {
  return (
    <div className="flex flex-col gap-8 pt-12">
      {/* Image Grid Skeleton */}
      <div className="grid grid-cols-4 gap-4">
        {/* Large Image Placeholder */}
        <Skeleton className="row-span-2 col-span-2 w-full h-[400px] rounded-xl bg-gray-300" />
        {/* Small Image Placeholders */}
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            className="w-[250px] h-[200px] rounded-xl bg-gray-300"
          />
        ))}
      </div>

      {/* Restaurant Details Skeleton */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          {/* Restaurant Name Placeholder */}
          <Skeleton className="h-6 w-48 bg-gray-300" />
          {/* Cuisine Type Placeholder */}
          <Skeleton className="h-4 w-64 bg-gray-300" />
          {/* Location Placeholder */}
          <Skeleton className="h-4 w-56 bg-gray-300" />
          {/* Open Status Placeholder */}
          <div className="flex gap-4">
            <Skeleton className="h-6 w-20 bg-gray-300" />
            <Skeleton className="h-6 w-32 bg-gray-300" />
          </div>
          {/* Buttons Placeholder */}
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32 rounded-2xl bg-gray-300" />
            <Skeleton className="h-12 w-20 rounded-2xl bg-gray-300" />
          </div>
        </div>

        {/* Rating and Reviews Placeholder */}
        <div className="flex gap-4">
          <Skeleton className="h-12 w-12 rounded-lg bg-gray-300" />
          <Skeleton className="h-12 w-16 bg-gray-300" />
        </div>
      </div>

      {/* Tabs Placeholder */}
      <Skeleton className="w-full h-12 rounded-lg bg-gray-300" />
    </div>
  );
}
