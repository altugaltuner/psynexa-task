import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative bg-black text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 cursor-pointer h-full"
                style={{ backgroundImage: "url('/concrete-background.jpeg')" }}
            ></div>
            <div className='flex justify-end z-10 relative md:pt-6 pt-2'><img src="/menu.png" alt="menu" className='md:mr-[123px] sm:mr-[50px] mr-[30px] cursor-pointer' /></div>
            <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between">

                <div className="w-full lg:w-1/2 flex text-left gap-[25px] items-center md:justify-normal justify-center">
                    <img src="/pink-logo1.png" alt="pink-logo" className='lg:h-[389px] h-[250px] hidden md:block' />
                    <div className='flex flex-col md:gap-9  sm:gap-5 gap-3 sm:w-auto w-[80%] md:pb-10 pb-4'>
                        <div className='flex flex-col items-center md:items-start'>
                            <p className='font-normal xl:text-[80px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] text-[#5F6377] hidden md:block'>&#123;</p>
                            <p className="font-corinthia text-[40px]  xl:text-[110px] lg:text-[90px] md:text-[70px] sm:text-[50px] leading-none font-normal">I’m James</p>
                            <h1 className=" xl:text-[146px] lg:text-[90px] md:text-[80px] sm:text-[65px] text-[45px] font-bold text-accent leading-none font-clash">Thomas</h1>
                            <p className=" xl:text-[42px] lg:text-[28px] md:text-[24px] sm:text-[20px] sm:text-base md:leading-[52px] sm:leading-10 leading-8 font-normal font-clash text-center md:text-left">
                                I like making <span className="text-primary font-bold">FUN</span>,<br /> interactive things with <br /> code. I also{' '}
                                <span className="text-primary font-bold">TALK</span> &{' '}
                                <span className="text-primary font-bold">WRITE</span><br /> about those things.
                            </p>
                        </div>
                        <div className="flex gap-[18px] lg:flex-row flex-col md:mb-0 mb-2 md:items-start items-center">
                            <button className="bg-accent flex justify-center items-center text-black rounded-lg font-medium shadow-custom-inset text-lg md:w-[240px] md:h-[60px] sm:w-[200px] sm:h-[55px] w-[180px] h-[50px] font-clash relative hover:bg-[rgba(255,235,92,0.8)] transition-all duration-300">
                                <img src='/email-icon.png' alt='email-icon' className='absolute left-[10%] lg:w-6 lg:h-6 sm:w-5 sm:h-5 w-4 h-4' />
                                hire <b className='ml-1'> ME</b>
                                <img src="/link-icon.png" alt="link-icon" className='absolute right-[10%] lg:w-8 lg:h-8 sm:w-6 sm:h-6 w-4 h-4' />
                            </button>
                            <button className="bg-secondary text-black px-4 py-2 rounded-lg font-medium shadow-custom-inset w-[200px] font-clash md:h-[60px] sm:h-[55px] h-[50px] hover:bg-[rgba(203,117,189,0.8)] transition-all duration-300	"><b>SEE</b> portfolio</button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full lg:w-1/2 flex items-center justify-center mb-8 md:mb-[0px] relative sm:h-[400px] font-clash">
                    <div className="bg-primary w-[288px] h-[430px] md:w-64 lg:w-72 lg:h-[500px] xl:h-[580px] rounded-t-full absolute z-0 md:bottom-[-120px] xl:bottom-[-180px] lg:bottom-[-100px] bottom-[-25px]"></div>
                    <div className='flex justify-center h-full w-full'>
                        <div className="overflow-hidden relative xl:w-[471px] xl:h-[702px] lg:w-[400px] lg:h-[600px] md:w-[350px] md:h-[530px] w-[300px] h-[450px] xl:bottom-[132px] lg:bottom-[110px] md:bottom-[15px] sm:bottom-[25px] bottom-[-25px]">
                            <img
                                src="/person.png"
                                alt="Profile"
                                className="absolute top-[25%] w-full h-auto object-cover scale-150 object-top"
                            />
                        </div>
                        <div className="items-center absolute md:top-[215px] md:right-[10px] lg:top-[200px] lg:right-[120px] bg-white  md:w-[170px] w-[148px] xl:h-[64px] md:h-[48px] rounded-r-[22px] rounded-tl-[22px] shadow-custom-inset justify-center hidden md:flex">
                            <p className='font-semibold md:text-base text-sm leading-6 text-[#252534]'>Data Analysis</p>
                        </div>
                        <div className="items-center absolute xl:bottom-[-70px] xl:left-[175px] bottom-[-80px] left-[65px] bg-white text-[#252534] xl:w-[212px] xl:h-[64px] w-[200px] h-[48px] rounded-l-[22px] rounded-br-[0px] rounded-tr-[22px] shadow-custom-inset justify-center hidden md:flex">
                            <p className='font-semibold md:text-base text-sm text-[#252534]'>App Development</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary md:py-8 py-6 gap-4 sm:gap-6 md:gap-12 flex justify-center items-center relative text-black z-15 font-clash">
                <img src="/star-logo.png" alt="star-logo" className='w-[52px] absolute top-[-26px] right-[36px]' />
                <img src="/star-logo.png" alt="star-logo" className='z-20 sm:w-[92px] w-12 absolute bottom-[-44px] left-[-30px] sm:left-[-45px]' />

                <div className="flex flex-col items-center">
                    <p className="md:text-[54px] sm:text-4xl text-2xl font-bold">7+</p>
                    <p className="font-normal md:text-xl sm:text-base text-xs">years of</p>
                    <p className='font-semibold md:text-xl sm:text-base text-xs'>experience</p>
                </div>

                <div className="h-12 w-px bg-black opacity-50"></div>

                <div className="flex flex-col items-center">
                    <p className="md:text-[54px] sm:text-4xl text-2xl font-bold">50+</p>
                    <p className="font-normal md:text-xl sm:text-base text-xs">complete</p>
                    <p className='font-semibold md:text-xl sm:text-base text-xs'>projects</p>
                </div>

                <div className="h-12 w-px bg-black opacity-50"></div>

                <div className="flex flex-col items-center">
                    <p className="md:text-[54px] sm:text-4xl text-2xl font-bold">30+</p>
                    <p className="font-normal md:text-xl sm:text-base text-xs">Happy</p>
                    <p className='font-semibold md:text-xl sm:text-base text-xs'>customers</p>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
