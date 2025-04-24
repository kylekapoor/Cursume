import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import PageIllustration from "@/components/page-illustration";

export const metadata = {
  title: "Terms of Service - Cursume",
  description: "Review the terms and conditions of using Cursume.",
};

export default function Terms() {
  return (
    <>
      <PageIllustration />
      <section id="Terms" className="relative px-4 sm:px-6 lg:px-8 py-20">
        {/* Back To Home Button (Arrow) */}
        <a
          href="/"
          className="absolute top-4 left-18 text-indigo-300 text-2xl p-3 opacity-0 transition-opacity duration-700 ease-in-out hover:text-white"
          title="Home"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaRegArrowAltCircleLeft />
        </a>

        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <div className="flex items-center justify-center mb-4 space-x-3">
            <h1
              className="font-nacelle text-5xl font-bold text-white md:text-6xl transition-opacity duration-700 ease-in-out"
              data-aos="fade-up"
            >
              Terms of Service
            </h1>
          </div>

          <p
            className="mb-10 text-med text-indigo-200/65 transition-opacity duration-500 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Please review the following terms carefully before using Cursume.
          </p>

          <div
  className="text-left text-indigo-100 transition-opacity duration-700 ease-in-out"
  data-aos="fade-up"
  data-aos-delay={200}
>
  <div>
    <h2 className="text-white font-semibold text-xl mb-2">1. Acceptance of Terms</h2>
    <p className="mb-6">
      By accessing or using the Cursume platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
    </p>
  </div>

  <div>
    <h2 className="text-white font-semibold text-xl mb-2">2. User Responsibilities</h2>
    <p className="mb-6">
      You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information at all times.
    </p>
  </div>

  <div>
  <h2 className="text-white font-semibold text-xl mb-2">3. Privacy</h2>
  <p className="mb-6">
    Our <a href="/privacy" className="underline hover:text-indigo-300 transition-colors duration-200 ease-in-out">Privacy Policy</a> explains how we collect, use, and protect your personal data. By using our platform, you consent to our data practices.
  </p>
</div>

  <div>
    <h2 className="text-white font-semibold text-xl mb-2">4. Modifications</h2>
    <p className="mb-6">
      We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting.
    </p>
  </div>

  <div>
    <h2 className="text-white font-semibold text-xl mb-2">5. Contact Us</h2>
    <p>
      If you have any questions about these Terms, please contact us at{" "}
      <a
        href="mailto:support@cursume.com"
        className="underline hover:text-indigo-300 transition-colors duration-200 ease-in-out"
      >
        support@cursume.com
      </a>.
    </p>
  </div>
</div>

        </div>
      </section>
    </>
  );
}