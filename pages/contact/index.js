// components
import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import emailjs from '@emailjs/browser';
import { useState, useRef, FormEvent } from 'react';
import { FaSpinner, FaWhatsapp } from 'react-icons/fa';
import { HiCheckCircle, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_5t081ne',
        'template_6wgy6nc',
        form.current,
        '4GbIsCzVifbY3ve0-'
      );
      setSuccess(true);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-primary/30'>
      <div className='container mx-auto py-16 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-[650px] sm:w-auto'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Entre <span className='text-accent'>Contato.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            ref={form}
            onSubmit={sendEmail}
            className='flex-1 flex flex-col gap-6 w-full mx-auto sm:w-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='nome' className='input' name='fullName' required />
              <input type='email' placeholder='email' className='input' name='email' required />
            </div>
            <input type='text' placeholder='assunto' className='input' name='subject' required />
            <textarea placeholder='mensagem' className='textarea' name='message' required></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              disabled={loading}
            >
              <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Fale comigo
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              {loading && <FaSpinner className='animate-spin' />}
              {success && <HiCheckCircle />}
            </button>
            {error && (
              <p className='text-red-500 mt-2'>Erro ao enviar mensagem. Tente novamente mais tarde.</p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
