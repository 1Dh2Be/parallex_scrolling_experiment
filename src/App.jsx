import { useRef } from "react";
import pic1 from "../public/images/1.jpg";
import pic2 from "../public/images/2.jpeg";
import { motion, useScroll, useTransform } from "motion/react";
import ReactLenis from "lenis/react";

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container} className="relative h-[200vh] w-full">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </ReactLenis>
  );
}

export default App;

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 z-0 h-screen bg-[#c72626] flex flex-col items-center justify-center gap-2"
    >
      <p>Scroll Perspective</p>
      <div className="flex justify-center items-center gap-2">
        <p>Section</p>
        <div className="w-40 h-14 lg:w-56 lg:h-20">
          <img className="h-full w-full" src={pic1} alt="" />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative z-10 h-screen">
      <img className="h-full w-full" src={pic2} alt="" />
    </motion.div>
  );
};
