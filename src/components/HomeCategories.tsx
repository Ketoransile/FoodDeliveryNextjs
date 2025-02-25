import Category from "../app/models/category";
import Image from "next/image";
import Link from "next/link";
// export const revalidate = 3600;

const iconMapping: Record<string, string> = {
  pizza: "/icons/pizzaIcon.svg",
  burger: "/icons/burgerIcon.svg",
  noodles: "/icons/noodlesIcon.svg",
  chicken: "/icons/chickensIcon.svg",
  fish: "/icons/fishIcon.svg",
  sandwich: "/icons/sandwichIcon.svg",
  soup: "/icons/soupIcon.svg",
  cake: "/icons/cakeIcon.svg",
};

interface CategoryType {
  _id: string;
  name: string;
  description: string;
  icon?: string;
}
type RawCategory = {
  _id: string; // _id will be a string after .toString()
  name: string;
  description: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  __v: number;
};

// async function getCategories(): Promise<CategoryType[]> {
//   // let categories: CategoryType[] = [];
//   try {
//     // const response = await Category.find({}).lean();
//     // console.log("Response from database is ", response);
//     // if (!response) {
//     //   throw new Error(`Failed to fetch categories:`);
//     // }
//     const apiUrl = process.env.PUBLIC_API_URL || "http://localhost:3000";
//     const response = await fetch(`${apiUrl}/api/categories`, {
//       next: { revalidate: 60 },
//     });
//     if (!response.ok) {
//       throw new Error("Error while fetching categories");
//     }
//     // categories = response.json();
//     const categoriesFromApi: CategoryType[] = await response.json();
//     console.log("Categoies resposne", categoriesFromApi);

//     return categoriesFromApi.map((category) => ({
//       ...category,
//       icon:
//         iconMapping[category.name.toLowerCase()] || "/icons/defaultIcon.svg",
//     }));
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }
async function getCategories(): Promise<CategoryType[]> {
  let categories: CategoryType[] = [];
  try {
    const rawCategories = (await Category.find()
      .lean()
      .exec()) as RawCategory[];
    categories = rawCategories.map((category: RawCategory) => ({
      _id: category._id.toString(), // Convert _id to string
      name: category.name,
      description: category.description,
      icon:
        iconMapping[category.name.toLowerCase()] || "/icons/defaultIcon.svg", // Optional, use icon mapping
    }));
    console.log("Categories fetched from database:", categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
  return categories;
}
export default async function HomeCategories() {
  const categories = await getCategories();

  return (
    <div>
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <div className="flex flex-col gap-8 pb-12">
          <h1 className="font-bold text-xl">
            Choose from your favourite category
          </h1>
          <div className="w-fit flex flex-col gap-2 items-center backdrop-3xl p-4 rounded-xl border border-slate-400 bg-white/10">
            <Image
              src="/icons/defaultIcon.svg"
              alt="all-foods"
              width={48}
              height={48}
            />
            <h1 className="font-bold text-xs text-white">Recommended</h1>
          </div>
          <div className="flex justify-between items-center gap-4 p-4">
            {categories.map((category) => (
              <Link
                href={`/categories/${category._id}`}
                className="flex flex-col gap-2 justify-center items-center"
                key={category._id}
                prefetch={true}
              >
                <Image
                  src={category.icon || "/icons/defaultIcon.svg"}
                  alt="icon-image"
                  width={48}
                  height={48}
                />
                <h1 className="text-white text-xs font-bold">
                  {category.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
