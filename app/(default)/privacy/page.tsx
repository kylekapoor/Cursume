import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import PageIllustration from "@/components/page-illustration";

export const metadata = {
  title: "Privacy Policy - Cursume",
  description: "Review the privacy policy of Cursume.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageIllustration />
      <section id="Privacy" className="relative px-4 sm:px-6 lg:px-8 py-20">
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
              Privacy Policy
            </h1>
          </div>

          <p
            className="mb-10 text-med text-indigo-200/65 transition-opacity duration-500 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Please review the following privacy policy carefully before using Cursume.
          </p>

          <div
            className="text-left text-indigo-100 space-y-6 transition-opacity duration-700 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div>
              <h2 className="text-white font-semibold text-xl mb-2">1. Information We Collect</h2>
              <p className="mb-6">
                We collect personal information that you provide to us, such as your name, email address, and any other information necessary for creating and managing your account on Cursume.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">2. How We Use Your Information</h2>
              <p className="mb-6">
                We use your information to provide and improve our services, communicate with you, and enhance your user experience.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">3. Data Protection</h2>
              <p className="mb-6">
                We take reasonable measures to protect the confidentiality of your personal information, including using encryption and secure servers.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">4. Sharing Your Information</h2>
              <p className="mb-6">
                We do not share your personal information with third parties unless required by law, or if necessary to provide our services to you.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">5. Your Rights</h2>
              <p className="mb-6">
                You have the right to access, update, or delete your personal information at any time. If you wish to exercise any of these rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">6. Cookies and Tracking Technologies</h2>
              <p className="mb-6">
                We may use cookies and other tracking technologies to enhance your experience on our platform. You can control the use of cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">7. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-xl mb-2">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
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