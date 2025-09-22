import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";
import { FaVideo, FaMicrophoneAlt, FaPenNib } from "react-icons/fa";
import { MdAnimation, MdOutlineOndemandVideo } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const MyServices = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <MdOutlineOndemandVideo className="text-3xl" />,
      title: "Demo & Tutorial Video Production",
      description:
        "Designing clear, structured, and visually engaging demo and tutorial videos to simplify complex SaaS workflows, onboard users, and increase product adoption.",
      gradient: "from-blue-500 to-cyan-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up",
    },
    {
      icon: <BiMoviePlay className="text-3xl" />,
      title: "Promo & Explainer Videos",
      description:
        "Crafting high-impact promo and explainer videos with strong storytelling, motion graphics, and product highlights that capture attention and communicate value effectively.",
      gradient: "from-blue-600 to-indigo-500",
      aosIcon: "zoom-in",
      aosTitle: "flip-right",
      aosDesc: "fade-up",
    },
    {
      icon: <FaVideo className="text-3xl" />,
      title: "Screen Recording & Editing",
      description:
        "Using industry-leading tools like TechSmith Camtasia to produce polished, professional screen recordings with smooth transitions, annotations, and a clean visual flow.",
      gradient: "from-teal-500 to-emerald-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-up",
      aosDesc: "fade-right",
    },
    {
      icon: <FaMicrophoneAlt className="text-3xl" />,
      title: "Voiceover Generation",
      description:
        "Creating natural, high-quality AI-generated or human-like voiceovers in multiple languages and tones to match your brand and engage your audience.",
      gradient: "from-indigo-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-left",
      aosDesc: "fade-up",
    },
    {
      icon: <MdAnimation className="text-3xl" />,
      title: "Animations & Motion Graphics",
      description:
        "Producing captivating animations, micro-interactions, and motion graphics to make your product videos visually appealing and memorable.",
      gradient: "from-sky-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "flip-left",
      aosDesc: "fade-up",
    },
    {
      icon: <FaPenNib className="text-3xl" />,
      title: "Script Writing & Storyboarding",
      description:
        "Writing compelling, concise scripts and storyboards that align with your product messaging, ensuring every second of video is purposeful and impactful.",
      gradient: "from-violet-500 to-purple-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-down",
      aosDesc: "fade-up",
    },
  ];

  return (
    <Fragment>
      <section
        id="services"
        className="relative py-20 px-6 bg-gray-900 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block group"
            >
              Our{" "}
              <span
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-[#38bdf8]"
              >
                Services
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Delivering customized video and SaaS solutions that educate users,
              increase engagement, and drive sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800 rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#38bdf8]/30"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    data-aos={service.aosIcon}
                    data-aos-delay={index * 100}
                    className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gray-700 group-hover:bg-white transition-all duration-500"
                  >
                    <span className="text-[#38bdf8] group-hover:scale-125 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>

                  <h3
                    data-aos={service.aosTitle}
                    data-aos-delay={index * 150}
                    className="text-xl font-semibold text-white mb-3"
                  >
                    {service.title}
                  </h3>
                  <p
                    data-aos={service.aosDesc}
                    data-aos-delay={index * 200}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </Fragment>
  );
};

export default MyServices;
