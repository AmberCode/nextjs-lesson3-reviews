import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';

export default async function ReviewPage() {
  const reviews = await getReviews(6);
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review, index) => {
          return (
            <li
              key={review.slug}
              className='bg-white border rounded shadow w-80 hover:shadow-xl'
            >
              <Link href={`/reviews/${review.slug}`}>
                <Image
                  src={review.image}
                  alt=''
                  width='320'
                  height='180'
                  className='mb-2 rounded-t'
                  priority={index === 0}
                />
                <h2 className='font-semibold font-orbitron py-1 text-center'>
                  {review.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
