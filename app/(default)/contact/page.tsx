import { FaRegArrowAltCircleLeft, FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Contact Us - Cursume",
  description: "Still have questions? Contact the team behind Cursume.",
};

import PageIllustration from "@/components/page-illustration";
import Accordion from "@/components/accordion";

export default function Contact() {
  return (
    <>
      <PageIllustration />
      <section id="Contact" className="relative px-4 sm:px-6 lg:px-8 py-20">
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
          {/* Flex container to align arrow with "Contact Us" title */}
          <div className="flex items-center justify-center mb-4 space-x-3">
            {/* Contact Us Title */}
            <h1
              className="font-nacelle text-5xl font-bold text-white md:text-6xl transition-opacity duration-700 ease-in-out"
              data-aos="fade-up"
            >
              Contact Us
            </h1>
          </div>

          <p
            className="mb-10 text-med text-indigo-200/65 transition-opacity duration-500 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Still have questions? Email us at{" "}
            <a
              href="mailto:support@cursume.com"
              className="underline hover:text-indigo-300 transition-colors duration-200 ease-in-out"
            >
              support@cursume.com
            </a>{" "}
            — we’re here for you.
          </p>

          {/* Team Section */}
          <div
            className="flex flex-wrap justify-center gap-12 mt-10 opacity-0 translate-y-5 transition-all duration-700 ease-in-out team-section"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Kyle Kapoor */}
            <div className="text-center bg-gradient-to-b from-indigo-600 to-indigo-500 p-6 rounded-lg shadow-lg w-72 transition-transform transform hover:scale-105 ease-in-out duration-300 hover:from-indigo-500 hover:to-indigo-400">
              <h3 className="text-white text-xl font-semibold">Kyle Kapoor</h3>
              <p className="text-indigo-200 mt-1">Co-Founder</p>
              <p className="text-indigo-300 mt-1">University of Waterloo</p>
              <p className="text-indigo-300 mb-4">Computer Science & Finance</p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/kylekapoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn - Kyle Kapoor"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Aadit Shah */}
            <div className="text-center bg-gradient-to-b from-indigo-600 to-indigo-500 p-6 rounded-lg shadow-lg w-72 transition-transform transform hover:scale-105 ease-in-out duration-300 hover:from-indigo-500 hover:to-indigo-400">
              <h3 className="text-white text-xl font-semibold">Aadit Shah</h3>
              <p className="text-indigo-200 mt-1">Co-Founder</p>
              <p className="text-indigo-300 mt-1">University of Waterloo</p>
              <p className="text-indigo-300 mb-4">Computer Science & Finance</p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/aaditshahh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn - Aadit Shah"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className="transition-opacity duration-700 ease-in-out mt-22"
            data-aos="fade-up"
            data-aos-delay={300}
            id="faq"
          >
            <h2 className="justify-center text-2xl text-white font-bold mb-6 font-nacelle">
              Frequently Asked Questions
            </h2>
            <Accordion
              items={[
                {
                  title: "How does Cursume work?",
                  content:
                    "Cursume uses AI to analyze your experiences and generate tailored, job-specific resumes that align with job descriptions and industry standards.",
                },
                {
                  title: "Is my data private and secure?",
                  content:
                    "Yes, we prioritize your privacy. Your data is encrypted and never shared without your permission.",
                },
                {
                  title: "Can I tailor my resume to multiple jobs?",
                  content:
                    "Absolutely. Cursume lets you create and manage multiple resumes optimized for different roles or industries.",
                },
                {
                  title: "What file formats do you support?",
                  content:
                    "We support PDF, DOCX, and TXT file exports, so you can upload or share your resume in your preferred format.",
                },
                {
                  title: "How much does Cursume cost?",
                  content:
                    "We offer a free tier and premium plans with advanced features like resume analytics, AI review, and priority support.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
