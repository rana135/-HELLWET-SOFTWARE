import React from 'react';
import titleLogo from '../../asset/hellwet.png'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src={titleLogo} className="mr-5 h-6 sm:h-9" alt="logo" />
                        <p className="max-w-xs mt-4 text-sm text-gray-600">

                        This is the core service of any software company. It involves the creation of new software products or the customization of existing ones to meet the unique needs of a particular business or industry.
                        </p>
                        <div className="flex mt-8 space-x-6 text-gray-600">
                            <a className="hover:opacity-75" href='https://www.facebook.com/RanaHossainShimul' target="_blank" rel="noreferrer">
                                <span className="sr-only"> Facebook </span>
                                <BsFacebook className='text-xl' />
                            </a>
                            <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                <span className="sr-only"> Instagram </span>
                                <BsInstagram className='text-xl' />
                            </a>
                            <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                <span className="sr-only"> Twitter </span>
                                <FaTwitter className='text-xl' />
                            </a>
                            <a className="hover:opacity-75" href='https://github.com/rana135' target="_blank" rel="noreferrer">
                                <span className="sr-only"> GitHub </span>
                                <BsGithub className='text-xl' />
                            </a>
                            <a className="hover:opacity-75" href='https://www.linkedin.com/in/md-rana-hossain1/' target="_blank" rel="noreferrer">
                                <span className="sr-only"> Linkedin </span>
                                <FaLinkedin className='text-xl' />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium">
                                Company
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> About </a>
                                <a className="hover:opacity-75" href> Meet the Team </a>
                                <a className="hover:opacity-75" href> History </a>
                                <a className="hover:opacity-75" href> Careers </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Services
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> 1on1 Coaching </a>
                                <a className="hover:opacity-75" href> Company Review </a>
                                <a className="hover:opacity-75" href> Accounts Review </a>
                                <a className="hover:opacity-75" href> HR Consulting </a>
                                <a className="hover:opacity-75" href> SEO Optimisation </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Helpful Links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> Contact </a>
                                <a className="hover:opacity-75" href> FAQs </a>
                                <a className="hover:opacity-75" href> Live Chat </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Legal
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> Privacy Policy </a>
                                <a className="hover:opacity-75" href> Terms &amp; Conditions </a>
                                <a className="hover:opacity-75" href> Returns Policy </a>
                                <a className="hover:opacity-75" href> Accessibility </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-xs text-gray-800">
                    © {currentYear} HELLWET SOFTWARE
                </p>
            </div>
        </footer>
    );
};

export default Footer;