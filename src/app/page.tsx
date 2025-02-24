import Hero from "../components/Hero";
import Image from "next/image";
import { Suspense } from "react";
import HomeCategories from "@/components/HomeCategories";
import HomeFoods from "@/components/HomeFoods";
import HomeRestaurants from "@/components/HomeRestaurants";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeCategorisIconsSkeleton from "@/components/HomeCategorisIconsSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Eclipses */}
      <Image
        src="/biggerEclipse.svg"
        alt="Background"
        width={500}
        height={500}
        className="absolute -z-10 -top-20 -right-20"
        loading="lazy"
      />
      <Image
        src="/smallerEclipse.svg"
        alt="Background"
        width={300}
        height={300}
        className="absolute -z-10 top-[300px] right-[350px]"
        priority
      />

      <Hero />
      <Suspense fallback={<HomeCategorisIconsSkeleton />}>
        <HomeCategories />
      </Suspense>

      <Suspense fallback={<HomeFoodsSkeleton />}>
        <HomeFoods />
      </Suspense>
      <Suspense fallback={<HomeRestaurantsSkeleton />}>
        <HomeRestaurants />
      </Suspense>
      <Suspense fallback={<HomeTestimonialsSkeleton />}>
        <HomeTestimonials />
      </Suspense>
    </div>
  );
}

// Skeleton Loaders for Better UX
function HomeFoodsSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/4" />
        </div>
      ))}
    </div>
  );
}

function HomeRestaurantsSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-40 w-full rounded-lg" />
      ))}
    </div>
  );
}

function HomeTestimonialsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-24 w-full rounded-lg" />
      ))}
    </div>
  );
}
