import React from 'react';

const SectionBottom = () => {
    return (
        <div className="relative bg-primary overflow-hidden flex flex-col items-center gap-2 md:pt-[52px] pt-6 min-h-[680px] pb-8">
            <div className='flex flex-col max-w-[1130px] md:gap-8 gap-4 items-center text-center px-6 font-clash'>
                <h2 className='font-semibold md:text-[54px] text-4xl leading-[60px]'>Family Background</h2>
                <p className='font-medium md:text-lg text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 w-full inset-0">

                <div className="w-full h-[50px] bg-transparent overflow-hidden absolute hidden sm:block">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary transform  scale-x-[1.0] rounded-b-[100%]"></div>
                </div>

                <div className="w-full md:h-[445px] sm:h-[350px] h-[300px] overflow-hidden">
                    <img src="/family1.jpeg" alt="Family 1" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:h-[445px] sm:h-[350px] h-[300px] overflow-hidden">
                    <img src="/family2.jpeg" alt="Family 2" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:h-[445px] sm:h-[350px] h-[300px] overflow-hidden">
                    <img src="/family3.jpeg" alt="Family 3" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:h-[445px] sm:h-[350px] h-[300px] overflow-hidden">
                    <img src="/family4.jpeg" alt="Family 4" className="w-full h-full object-cover md:object-bottom object-center" />
                </div>

                <div className="w-full h-[50px] bottom-0 bg-transparent overflow-hidden absolute hidden sm:block">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary transform scale-x-[1.0] rounded-t-[100%]"></div>
                </div>
            </div>
        </div>
    );
};

export default SectionBottom;
