import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[12rem] '>
        <div className='flex justify-around mb-2'>
          <a href="https://github.com/Longsparfa" className='mr-4'>
             <AiFillGithub size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/parfa-longs-661643189/" className='mr-4'>
             <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://www.instagram.com/longsingenious/" className='mr-4'>
              <AiFillInstagram size="3rem"/>
          </a>
        </div>
        <div className='flex flex-wrap ml-16'>
          <p className='mr-4'>Email: <a href="mailto:longsparfa@gmail.com">longsparfa@gmail.com</a></p>
          <p className='mr-4'>Call: <a href="tel:+234-806-037-5723">+234-806-037-5723</a></p>
          
        </div>
        <p>&copy; {year} ImageGallery by Parfa001</p>
      </div>


    // <div>
    //     <section className='bg-[#0f1624] w-full h-[12rem] '>
    //     <ul className='border-t-[1px] border-solid border-[rgba(255, 255, 255, 0.1)] grid grid-cols-3 gap-[40px] pt-[40px] px-[0] pb-[28px] lg:pt-[32px] lg:px-0 lg:pb-[16px] md:w-[100%] md:gap-[16px] sm:pr-[4px] sm:gap-[4px]'>
    //         <div className='flex flex-col w-[100%]'>
    //            <h4 className='not-italic font-semibold text-[12px] leading-[24px] uppercase text-[rgba(255, 255, 255, 0.4)] mb-[16px] sm:text-[10px] sm:leading-[12px] sm:mb-[8px]'>Call</h4>
    //            <a className='text-[18px] leading-[30px] text-[rgba(255, 255, 255, 0.75)] mb-[16px] transition 0.3s ease relative left-0 hover:text[#fff] hover:left-[6px]' href="tel:+234-806-037-5723">+234-806-037-5723</a>
    //         </div>
    //         <div className='flex flex-col max-w-[220px] w-[100%]'>
    //            <h4 className='not-italic font-semibold text-[12px] leading-[24px] uppercase text-[rgba(255, 255, 255, 0.4)] mb-[16px] sm:text-[10px] sm:leading-[12px] sm:mb-[8px]'>Email</h4>
    //            <a className='text-[18px] leading-[30px] text-[rgba(255, 255, 255, 0.75)] mb-[16px] transition 0.3s ease relative left-0 hover:text[#fff] hover:left-[6px]' href="mailto:longsparfa@gmail.com">longsparfa@gmail.com</a>
    //         </div>
    //     </ul>
    //     <div className='max-w-[1040px] flex flex-row justify-between sm:w-[100%] '>
    //         <div className='flex align-baseline flex-wrap mr-auto md:flex-col sm:align-center sm:mt-0 sm:mr-0 sm:mb-[32px]'>
    //             <p className='text-[rgba(255, 255, 255, 0.5)] min-w-[280px] tracking-[0.02em] text-[18px] md:text-[16px] sm:[14px] leading-[30px] md:leading-[28px] sm:leading-[22px] p-[1rem] sm:min-w-[100px]'>Can only get better, let's take on one project at a time.</p>
    //         </div>
    //         <div className='flex align-center md:justify-center md:pr-[16px] md:flex-wrap'>
    //            <a className='transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] hover:[scale(1.2)] cursor-pointer' href="https://github.com/Longsparfa" >
    //               <AiFillGithub size="3rem" />
    //            </a>
    //            <a className='transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] hover:[scale(1.2)] cursor-pointer' href="https://www.linkedin.com/in/parfa-longs-661643189/" >
    //               <AiFillLinkedin size="3rem" />
    //            </a>
    //            <a className='transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] hover:[scale(1.2)] cursor-pointer' href="https://www.instagram.com/longsingenious/" >
    //               <AiFillInstagram size="3rem"/>
    //            </a>
    //         </div>
    //     </div>
    // </section>
    // </div>
  )
}

export default Footer;