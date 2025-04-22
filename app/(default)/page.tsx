export const metadata = {
  title: "Cursume",
  description: "Cursor changed coding. Cursume changes resumes.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Process from "@/components/process";
import Features from "@/components/features";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Process />
      <Features />
      <Cta />
    </>
  );
}
