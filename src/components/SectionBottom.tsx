"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SectionBottom = () => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (textRef.current) observer.observe(textRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="relative bg-primary overflow-hidden flex flex-col items-center gap-2 md:pt-[52px] pt-6 min-h-[680px] pb-8">
            <div
                ref={textRef}
                className={`flex flex-col max-w-[1130px] md:gap-8 gap-4 items-center text-center px-6 font-clash transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <h2 className='font-semibold md:text-[54px] text-4xl leading-[60px]'>
                    Family Background
                </h2>
                <p className='font-medium md:text-lg text-sm'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 w-full inset-0">
                <div className="w-full h-[50px] bg-transparent overflow-hidden absolute hidden sm:block">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary transform scale-x-[1.0] rounded-b-[100%]"></div>
                </div>
                {['family1.jpeg', 'family2.jpeg', 'family3.jpeg', 'family4.jpeg'].map((image, index) => (
                    <div key={image} className="w-full md:h-[445px] sm:h-[350px] h-[300px] overflow-hidden group">
                        <Image
                            src={`/${image}`}
                            alt={`Family ${index + 1}`}
                            width={867}
                            height={1300}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
                <div className="w-full h-[50px] bottom-0 bg-transparent overflow-hidden absolute hidden sm:block">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary transform scale-x-[1.0] rounded-t-[100%]"></div>
                </div>
            </div>
        </div>
    );
};

export default SectionBottom;
