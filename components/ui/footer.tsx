import Logo from "./logo";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Footer illustration */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
            aria-hidden="true"
          >
            {/* Optional decorative background */}
          </div>

          {/* Footer content */}
          <div
            className="grid grid-cols-1 gap-12 py-8 md:grid-cols-4 md:py-12 lg:grid-cols-5 lg:grid-rows-1 xl:gap-20"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* Logo & company info */}
            <div className="lg:col-span-2 transition-opacity duration-700 ease-in-out">
              <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
                <Logo />
              </div>
              <div className="text-sm" data-aos="fade-up" data-aos-delay="200">
                <p className="mb-3 text-white-700">Cursume</p>
                <p className="mb-3 text-indigo-200/65">
                  Turning experiences into stories that open doors.
                </p>
                <ul className="inline-flex gap-3 mt-4">
                  <li>
                    <a
                      className="flex items-center justify-center text-indigo-500 transition-all duration-300 hover:text-indigo-400 hover:scale-110"
                      href="https://www.linkedin.com/in/cursume/"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center text-indigo-500 transition-all duration-300 hover:text-indigo-400 hover:scale-110"
                      href="mailto:support@cursume.com"
                      aria-label="Email"
                    >
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links section */}
            <div
              className="lg:col-span-3 flex justify-end gap-20 text-right"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-200">Tool</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      className="text-indigo-200/65 transition-all duration-300 hover:text-indigo-500 hover:translate-x-1"
                      href="#Demo"
                    >
                      Demo
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200/65 transition-all duration-300 hover:text-indigo-500 hover:translate-x-1"
                      href="#Process"
                    >
                      Process
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200/65 transition-all duration-300 hover:text-indigo-500 hover:translate-x-1"
                      href="#Features"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-200">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      className="text-indigo-200/65 transition-all duration-300 hover:text-indigo-500 hover:translate-x-1"
                      href="#0"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200/65 transition-all duration-300 hover:text-indigo-500 hover:translate-x-1"
                      href="#0"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200/65 transition-all duration-300 hover:text-indigo-500 hover:translate-x-1"
                      href="#0"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom line */}
      <div className="text-center py-4 text-sm text-indigo-200/65">
        © Cursume 2025. All Rights Reserved.
      </div>
    </>
  );
}
