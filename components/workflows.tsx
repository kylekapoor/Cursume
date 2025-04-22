import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="workflows" className="...">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div
            className="mx-auto max-w-3xl pb-12 text-center md:pb-20 transition-opacity duration-700 ease-in-out"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                From Prompt To Perfect
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl transition-transform duration-700 ease-in-out">
              How Cursume Works
            </h2>
            <p className="text-lg text-indigo-200/65 transition-opacity duration-500 ease-in-out">
              Resumes, reimagined as a creative workflow. Start with your goals, 
              and watch your story come to life with the help of AI.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-500 ease-in-out hover:scale-[1.01]"
              data-aos="fade-up"
              data-aos-delay="0"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 transition duration-300 ease-in-out hover:shadow-lg">
                <Image
                  className="inline-flex transition-transform duration-500 group-hover/card:scale-105"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Start With A Prompt
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Describe the job you want — or paste the posting — and let Cursume set the stage.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-500 ease-in-out hover:scale-[1.01]"
              data-aos="fade-up"
              data-aos-delay="150"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 transition duration-300 ease-in-out hover:shadow-lg">
                <Image
                  className="inline-flex transition-transform duration-500 group-hover/card:scale-105"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Watch It Build
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    See your resume structure and content take shape in real time — like magic.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-500 ease-in-out hover:scale-[1.01]"
              data-aos="fade-up"
              data-aos-delay="300"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 transition duration-300 ease-in-out hover:shadow-lg">
                <Image
                  className="inline-flex transition-transform duration-500 group-hover/card:scale-105"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Customize & Polish
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Edit inline or accept smart suggestions. Every line is yours — just better.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}