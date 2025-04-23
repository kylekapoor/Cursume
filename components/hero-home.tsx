import { SignInButton } from "@clerk/nextjs";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/demo";

export default function HeroHome() {
  return (
    <section id="Home" className="...">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="mb-4 font-nacelle text-5xl font-bold text-white md:text-6xl transition-opacity duration-700 ease-in-out"
              data-aos="fade-up"
            >
              Cursume
            </h1>

            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl transition-transform duration-700 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Cursor changed coding. Cursume changes resumes.
            </h2>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-med text-indigo-200/65 transition-opacity duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Update your resume with a single prompt and watch it come to life in real time. <br />
                Whether it’s your first internship or your next big move, we’ve got you covered.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <SignInButton mode="redirect">
                    <a
                      href="#"
                      role="button"
                      className="group block w-full sm:w-auto cursor-pointer mb-4 px-6 py-3 rounded-lg text-white font-semibold 
                                 bg-gradient-to-b from-indigo-600 to-indigo-500 
                                 hover:from-indigo-500 hover:to-indigo-400 
                                 transition-all duration-300 ease-in-out transform hover:scale-105
                                 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] 
                                 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                      style={{
                        WebkitAppearance: "none",
                        WebkitBackgroundClip: "padding-box",
                        display: "block",
                      }}
                    >
                      <span className="relative inline-flex items-center">
                        Get Started
                        <span className="ml-1 tracking-normal text-white/50 transition-transform duration-200 ease-in-out group-hover:translate-x-1">
                          -&gt;
                        </span>
                      </span>
                    </a>
                  </SignInButton>
                </div>
              </div>
            </div>
          </div>

          {/* Video section */}
          <div
            id="Demo"
            className="transition-opacity duration-700 ease-in-out scroll-mt-24"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="videos//video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
