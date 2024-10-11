"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SectionTop = () => {
    const menuItems = [
        {
            id: 1,
            number: '01',
            title: 'Data Analysis',
            description: (
                <>
                    Lorem ipsum is simply dummy text of the printing and <br /> typesetting industry.
                </>
            ),
            bgColor: 'bg-secondary'
        },
        {
            id: 2,
            number: '02',
            title: 'Mobile App Development',
            description: (
                <>
                    Lorem ipsum is simply dummy text of the printing and <br /> typesetting industry.
                </>
            ),
            bgColor: 'bg-primary'
        },
        {
            id: 3,
            number: '03',
            title: 'Process Engineering',
            description: (
                <>
                    Lorem ipsum is simply dummy text of the printing and <br /> typesetting industry.
                </>
            ),
            bgColor: 'bg-[#5D6CBE]'
        },
        {
            id: 4,
            number: '04',
            title: 'Web Development',
            description: (
                <>
                    Lorem ipsum is simply dummy text of the printing and <br /> typesetting industry.
                </>
            ),
            bgColor: 'bg-[#FFEB5C]'
        },
    ];

    const [isVisible, setIsVisible] = useState({
        left: false,
        right: Array(6).fill(false),
    });

    const leftRef = useRef(null);
    const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const handleIntersection = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
            if (entry.isIntersecting) {
                if (entry.target === leftRef.current) {
                    setIsVisible((prev) => ({ ...prev, left: true }));
                } else {
                    const index = rightRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        setIsVisible((prev) => {
                            const newRight = [...prev.right];
                            newRight[index] = true;
                            return { ...prev, right: newRight };
                        });
                    }
                }
                observer.unobserve(entry.target);
            }
        };

        const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => handleIntersection(entry, observer));
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (leftRef.current) observer.observe(leftRef.current);
        rightRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="relative bg-black text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 cursor-pointer h-full"
                style={{ backgroundImage: "url('/concrete-background.jpeg')" }}
            ></div>
            <div className="flex flex-col gap-5 lg:flex-row items-center justify-between pb-12 md:pt-24 sm:pt-14 pt-4 px-6 lg:px-16 relative z-10">
                <Image src="/star-logo.png" width={52} height={52} alt="star-logo" className='absolute bottom-[-46px] left-[50px] w-[92px] h-[92px]' />
                <Image src="/big-pink.png" width={52} height={52} alt="star-logo" className="absolute bottom-0 right-0 hidden md:block 2xl:w-[140px] xl:w-28 lg:w-16 md:w-28" />

                <div
                    ref={leftRef}
                    className={`w-full lg:w-1/2 flex justify-center lg:justify-start lg:mb-0 transition-all duration-1000 ${isVisible.left ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                    <Image
                        src="/rocket-boy.png"
                        alt="Illustration"
                        className="2xl:w-[610px] object-cover"
                        width={609}
                        height={512}
                    />
                </div>

                <div className="flex flex-col lg:items-baseline items-center w-full lg:w-1/2 text-white font-clash">
                    <div
                        ref={(el) => { rightRefs.current[0] = el; }}
                        className={`transition-all duration-1000 ${isVisible.right[0] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <h2 className="md:text-[54px] sm:text-5xl text-3xl font-semibold leading-[60px] mb-4 sm:text-left text-center">
                            My Professional<br />Background
                        </h2>
                    </div>
                    <div
                        ref={(el) => { rightRefs.current[1] = el; }}
                        className={`transition-all duration-1000 ${isVisible.right[1] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <p className="sm:text-lg text-base mb-6 font-medium leading-6">
                            Sed ut perspiciatis unde omnis iste natus error sit<br />voluptatem accusantium doloremque laudantium,
                        </p>
                    </div>

                    <div>
                        {menuItems.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => { rightRefs.current[index + 2] = el; }}
                                className={`flex flex-col transition-all duration-1000 delay-${index * 200} ${isVisible.right[index + 2] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                            >
                                <div className="flex space-x-4 items-center">
                                    <div className={`${item.bgColor} text-black sm:w-[64px] w-[80px] h-[64px] rounded-sm font-bold text-2xl leading-6 items-center flex justify-center`}>
                                        {item.number}
                                    </div>
                                    <div className='flex flex-col'>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-sm">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                {index !== menuItems.length - 1 && (
                                    <hr className="md:my-9 sm:my-6 my-3 border-t border-white opacity-20"></hr>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTop;
