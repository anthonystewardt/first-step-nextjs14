import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Página Pricing",
  description: "Pagina Pricing ",
};

const PricingPage = () => {
  return (
    <>
      <h1 className="text-5xl">Pricing Page</h1>
    </>
  );
};

export default PricingPage;
