//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion 
import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return <div className='h-full bg-primary/30 py-16 text-center'>
    <div className='container mx-auto h-full flex flex-col justify-center'>
      {/*title */}
      <motion.h2
      variants={fadeIn('up',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden' 
      className='h2 mb-2 xl:-0 '>
        Feedback <span className='text-accent'>comentários.</span>
        </motion.h2>
      {/*slider */}
      <motion.div  
      variants={fadeIn('up',0.4)}
      initial='hidden'
      animate='show'
      exit='hidden' >
        <TestimonialSlider />
      </motion.div>
    </div>
  </div>;
};

export default Testimonials;
