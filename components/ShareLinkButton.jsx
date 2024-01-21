'use client';
import { useState } from 'react';

import { LinkIcon } from '@heroicons/react/20/solid';

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const buttonClickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(() => true);
    setTimeout(() => setClicked(false), 3000);
  };
  return (
    <button
      onClick={buttonClickHandler}
      className='flex gap-1 items-center border px-1 py-1 rounded text-slate-500 text-sm
      hover:bg-orange-100 hover:text-slate-700'
    >
      <LinkIcon className='h-4 w-4' />
      {clicked ? 'Linked copied' : 'Share link'}
    </button>
  );
}
