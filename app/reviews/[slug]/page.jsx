import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview } from '@/lib/reviews';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
// import { getSlugs } from '@/lib/reviews';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';

// export const dynamic = 'force-dynamic';

// export async function generateStaticParams() {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className='font-bold pb-3'>{review.subtitle}</p>
      <div className='flex gap-3 items-baseline'>
        <p className='italic pb-2'>{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt=''
        width='640'
        height='360'
        className='mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='max-w-screen-sm prose prose-slate'
      />

      <section className='border-dashed border-t max-w-screen-sm mt-3 py-3'>
        <h2 className='font-bold flex gap-2 items-center text-xl'>
          <ChatBubbleBottomCenterTextIcon className='h-6 w-6' />
          Comments
        </h2>
        <CommentForm slug={slug} title={review.title} />
        <CommentList slug={slug} />
      </section>
    </>
  );
}
