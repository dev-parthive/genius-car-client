import React from 'react';
import person from  '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-28">
        <div className="hero-content flex-col lg:flex-row">
        <div className='w-1/2 relative sm:mb-20'>
        <img src={person} alt='img' className='w-4/5 h-full rounded-lg shadow-2x1' />
        <img src={parts} alt='img' className='absolute right-8 border-8 border-white top-1/2 rounded-lg shadow-2xl w-3/5 '/>
        </div>
          <div className='w-1/2'>
            <p className='text-red-500  text-2xl font-semibold'>About Us</p>
            <h1 className="text-5xl font-bold my-5 font-bold ">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6 text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6 text-base text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary border-0 bg-[#FF3811]">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;