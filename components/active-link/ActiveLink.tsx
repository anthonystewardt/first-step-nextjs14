"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import style from "@/styles/nav-link.module.css";

interface Props {
  text: string;
  path: string;
}


export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      href={path}
      className={`${style.link} ${pathName === path && style["active-link"]}`}
    >
      {text}
    </Link>
  );
}
