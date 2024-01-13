import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Página About",
  description: "Pagina About",
};

const AboutPage = () => {
  return (
    <>
      <h1 className="text-5xl">About Page</h1>
    </>
  );
};

export default AboutPage;
