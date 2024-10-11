"use client";

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    const [email, setEmail] = React.useState('');
    const [modalOpen, setModalOpen] = React.useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!email) {
                alert('Please enter an email address.');
            } else if (validateEmail(email)) {
                openModal();
            }
        }
    };

    function openModal() {
        if (validateEmail(email)) {
            setModalOpen(true);
            setEmail('');
        } else {
            alert('Please enter a valid email address.');
        }
    }

    return (
        <footer className="bg-black text-white pt-12 md:pb-36 pb-9 px-8 lg:px-16 font-clash">
            <div className=" flex md:flex-row flex-col lg:gap-28 md:gap-14 gap-7 md:items-start items-center min-h-[350px]">
                <div className='flex flex-col w-full md:w-1/2 gap-[26px] md:items-start items-center xl:pl-12 pl-0'>
                    <h2 className='font-corinthia leading-[65px] text-[110px]'>thisuix</h2>
                    <p className="font-normal text-base leading-[26px] max-w-[456px]">
                        Lorem Ipsum is simply dummy text of the printing and br typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className='flex flex-col md:w-1/2 sm:w-3/4 w-full min-h-[350px] justify-between max-w-[500px]'>
                    <div className='flex justify-between'>
                        <div className='mr-5'>
                            <h3 className="font-bold md:text-2xl sm:text-xl text-lg mb-4">Pages</h3>
                            <ul className="space-y-2">
                                <li><button className="text-base font-normal hover:underline">Home</button></li>
                                <li><button className="text-base font-normal hover:underline">About Us</button></li>
                                <li><button className="text-base font-normal hover:underline">Contact Us</button></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold md:text-2xl sm:text-xl text-lg mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><button className="text-base font-normal hover:underline">Privacy Policy</button></li>
                                <li><button className="text-base font-normal hover:underline">Terms & Conditions</button></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold my-4">Subscribe</h3>
                        <form className="flex items-center text-black overflow-hidden relative">
                            <input
                                type="email"
                                placeholder="Input your email address in here"
                                className="h-[54px] sm:h-[74px] px-4 py-2 w-full focus:outline-none text-base font-bold bg-[#FFFFFF21] border border-white border-opacity-65 rounded-lg text-white placeholder-white placeholder:font-bold placeholder:text-[14px] font-cabinet"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button type="button" className="bg-primary absolute sm:w-[54px] sm:h-[54px] w-[35px] h-[35px] shadow-[0px_8px_21px_0px_#E8752529] rounded-lg right-[2%] flex justify-center items-center hover:bg-[rgba(93,190,140,0.6)] transition-all duration-300" onClick={openModal}>
                                <Image
                                    src="/link-icon.png"
                                    alt="Link Icon"
                                    width={35}
                                    height={35}
                                    className="filter invert w-[70%]"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="md:mt-[72px] mt-4 text-center font-bold sm:text-xl text-base font-cabinet">
                © 2023 - Thisuix. All Rights Reserved.
            </div>
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <p className="text-center text-lg text-black font-semibold">You have subscribed successfully!</p>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;