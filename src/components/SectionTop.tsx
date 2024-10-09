import React from 'react';

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

    return (
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-between bg-black pb-12 md:pt-24 sm:pt-14 pt-4 px-6 lg:px-16 relative">
            <img src="/star-logo.png" alt="star-logo" className='absolute bottom-[-46px] left-[50px] w-[92px] h-[92px]' />
            <img src="/big-pink.png" alt="star-logo" className="absolute bottom-0 right-0 hidden md:block 2xl:w-[140px] xl:w-28 lg:w-16 md:w-28" />

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mb-0">
                <img
                    src="/rocket-boy.png"
                    alt="Illustration"
                    className="2xl:w-[610px] object-cover"
                />
            </div>

            <div className="flex flex-col lg:items-baseline items-center w-full lg:w-1/2 text-white font-clash">
                <h2 className="md:text-[54px] sm:text-5xl text-3xl font-semibold leading-[60px] mb-4 sm:text-left text-center">My Professional<br />Background</h2>
                <p className="sm:text-lg text-base mb-6 font-medium leading-6">
                    Sed ut perspiciatis unde omnis iste natus error sit<br />voluptatem accusantium doloremque laudantium,
                </p>

                <div className="">
                    {menuItems.map((item, index) => (
                        <div className='flex flex-col'>
                            <div key={item.id} className="flex space-x-4 items-center">
                                <div className={`${item.bgColor} text-black sm:w-[64px] w-[80px] h-[64px] rounded-sm font-bold text-2xl leading-6 items-center flex justify-center`}>{item.number}</div>
                                <div className='flex flex-col'>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-sm">{item.description}</p>
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
    );
};

export default SectionTop;
