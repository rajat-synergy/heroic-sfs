'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Testimonial {
    image: string;
    name: string;
    role: string;
    company: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        image: '/testimonial-1.jpg',
        name: 'John Doe',
        role: 'CEO',
        company: 'ABC Corporation',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        image: '/testimonial-2.jpg',
        name: 'Jane Doe',
        role: 'CTO',
        company: 'XYZ Inc.',
        quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        image: '/testimonial-3.jpg',
        name: 'Bob Smith',
        role: 'Founder',
        company: 'Startup Ltd.',
        quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

const ReadOurBlog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">What Our Clients Say</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mb-4"
                                />
                                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                <p className="text-gray-400">{testimonial.role} at {testimonial.company}</p>
                                <blockquote className="text-lg font-bold mb-4">{testimonial.quote}</blockquote>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 rounded-full mx-2 ${currentIndex === index ? 'bg-yellow-500' : 'bg-gray-600'}`}
                            onClick={() => handleSlideChange(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReadOurBlog;
