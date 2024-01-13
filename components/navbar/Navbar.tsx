
import Link from 'next/link';
import React from 'react';
import { HomeFillIcon } from "@primer/octicons-react";
import { ActiveLink } from '..';



const paths = [
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Pricings', path: '/pricing' },
]


export const Navbar = () => {
  return (
    <div className='bg-blue-800 text-white  flex justify-between items-center p-3 rounded'>
      <Link href="/" className='flex gap-2 items-center'>
        <HomeFillIcon size={24} />
          Home</Link>
      <nav>
        <ul className='flex gap-3 items-center'>
          {paths.map((path) => (
            <li key={path.name}>
              <ActiveLink path={path.path} text={path.name} key={path.name} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
