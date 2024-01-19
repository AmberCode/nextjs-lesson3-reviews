import Link from "next/link";
import Heading from "@/components/Heading";

export default function HomePage() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>
      <div className="bg-white border rounded shadow w-80 md:w-full hover:shadow-xl">
        <Link
          href="/reviews/stardew-valley"
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/stardew-valley.jpg"
            alt=""
            width="320"
            height="180"
            className="mb-2 rounded-t"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
