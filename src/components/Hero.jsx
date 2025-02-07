import { styles } from "../styles";
// eslint-disable-next-line no-unused-vars
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // 3d Computer
    // windowWidth>=600 ?<>

    // <section className={`relative w-full h-screen mx-auto`}>
    //   <div
    //     className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //   >
    //     <div className='flex flex-col justify-center items-center mt-5'>
    //       <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    //       <div className='w-1 sm:h-80 h-40 violet-gradient' />
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hi, I'm <span className='text-[#915EFF]'>Nasir</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         Passionate about technology, <br className='sm:block hidden' />
    //         solving real-world problems.
    //       </p>
    //     </div>
    //   </div>

    //   <ComputersCanvas />

    //   <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
    //     <a href='#about'>
    //       <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
    //         <motion.div
    //           animate={{
    //             y: [0, 24, 0],
    //           }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //           }}
    //           className='w-3 h-3 rounded-full bg-secondary mb-1'
    //         />
    //       </div>
    //     </a>
    //   </div>
    // </section>

    //         </>
    // :

    <div
      className={` mt-16 inset-0 top-[10px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I&apos;m <span className="text-[#915EFF]">Nasir</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Passionate about technology, <br className="sm:block hidden" />
          solving real-world problems.
        </p>
        {/* resume button */}
        <a
          className=" mb-16 inline-block px-6 py-3 w-fit sm:w-fit rounded-se-3xl rounded-bl-3xl bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
          href="resume.pdf"
          download="nasir-resume"
        >
          <button className="flex items-center gap-2">
            Resume <FaDownload />
          </button>
        </a>
        {/* resume button */}
      </div>
    </div>
  );
};

export default Hero;
