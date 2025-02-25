import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeTestimonialsCard from "./HomeTestimonialsCard";
import Image from "next/image";

export interface customerType {
  _id: string;
  name: string;
  review: string;
  image: string;
}
export const customersReviews: customerType[] = [
  {
    _id: "1",
    name: "Doe",
    review:
      "lorem oaegi egiah egpaieh gpaieg apeig apeiga epgiae pgiae gpaeig aepiga epigae pgiuae gpiaeug q49ug ape9gu ape9gauepg9ua epg9auegpae9guape9guaepgaepg9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer1.jpg",
  },
  {
    _id: "2",
    name: "Jane",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer2.jpg",
  },
  {
    _id: "3",
    name: "Mark",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer3.jpg",
  },
  {
    _id: "4",
    name: "Williams",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer4.jpg",
  },
  {
    _id: "5",
    name: "Thomas",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer5.jpg",
  },
  {
    _id: "6",
    name: "Jefferson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer6.jpg",
  },
  {
    _id: "7",
    name: "Max",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer7.jpg",
  },
  {
    _id: "8",
    name: "John",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer8.jpg",
  },
  {
    _id: "9",
    name: "Morgan",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer9.jpg",
  },
  {
    _id: "10",
    name: "Larry",
    review:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    image: "/reviewers/reviewer10.jpg",
  },
];

export default async function HomeTestimonials() {
  return (
    <div className="flex flex-col gap-8 pb-32  relative overflow-visible">
      <Image
        src="/biggerEclipse.svg"
        alt="eclipse-image"
        width={300}
        height={300}
        className="absolute top-0 right-80"
        priority
      />
      <Image
        src="/smallerEclipse.svg"
        alt="eclipse-image"
        width={200}
        height={200}
        className="absolute top-80 left-96 overflow-visible"
        priority
      />

      <h1 className="text-white font-bold text-xl">
        What Our Customers Say About Us
      </h1>

      <div className="pt-12">
        {customersReviews.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          <div className="px-20 ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {customersReviews.map((customer) => (
                  <CarouselItem
                    key={customer._id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className=" bg-transparent ">
                        <HomeTestimonialsCard customer={customer} />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-transparent" />
              <CarouselNext className="bg-transparent" />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
