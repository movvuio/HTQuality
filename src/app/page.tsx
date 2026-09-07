"use client";

import { Hero } from "@/components/Hero";
import { SectionNosotros } from "@/components/SectionNosotros";
import { SectionVendedores } from "@/components/SectionVendedores";
import { SectionProceso } from "@/components/SectionProceso";
import { SectionInversionistas } from "@/components/SectionInversionistas";
import { SectionContacto } from "@/components/SectionContacto";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionNosotros />
      <SectionVendedores />
      <SectionProceso />
      <SectionInversionistas />
      <SectionContacto />
    </>
  );
}
