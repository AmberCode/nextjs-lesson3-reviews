'use client';

import { useIsClient } from '@/lib/hooks';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export default function SearchBox() {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');
  const [debounceQuery] = useDebounce(query, 300);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (debounceQuery.length > 1) {
      (async () => {
        const response = await fetch(
          '/api/search?query=' + encodeURIComponent(debounceQuery),
        );
        const reviews = await response.json();
        setReviews(reviews);
      })();
    } else {
      setReviews([]);
    }
  }, [debounceQuery]);

  if (!isClient) {
    return null;
  }

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  return (
    <div className='relative w-48'>
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder='Search…'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className='border px-2 py-1 rounded w-full'
        />
        <Combobox.Options className='absolute bg-white py-1 w-full'>
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? 'bg-orange-100' : ''
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
