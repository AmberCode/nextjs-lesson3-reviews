import Link from "next/link";
import Heading from "@/components/Heading";
import { getFeatureReview } from "@/lib/review";

export default async function HomePage() {
  const defaultReview = await getFeatureReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>
      <div className="bg-white border rounded shadow w-80 md:w-full hover:shadow-xl">
        <Link
          href={`/reviews/${defaultReview.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={`${defaultReview.image}`}
            alt=""
            width="320"
            height="180"
            className="mb-2 rounded-t"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center">
            {defaultReview.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
