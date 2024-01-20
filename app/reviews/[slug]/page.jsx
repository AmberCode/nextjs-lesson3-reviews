import Heading from "@/components/Heading";
import { getReview } from "@/lib/review";
import { getSlugs } from "@/lib/review";

export async function generateStaticParams() {
  const slugs = await getSlugs();

  console.log("andy:", { slugs });

  return slugs.map((x) => ({
    slug: x,
  }));
}

export default async function ReviewPage({ params: { slug } }) {
  console.log("[ReviewPage] rendering", slug);
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
