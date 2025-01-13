import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialLink = () => {
    return (
        <div className='flex space-x-4 md:space-x-[24px]'>
            <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="text-white hover:text-cyan"
            >
                <FaFacebook className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]" />
            </Link>
            <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="text-white hover:text-cyan"
            >
                <BsInstagram className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]" />
            </Link>
            <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-white hover:text-cyan"
            >
                <FaLinkedin className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]" />
            </Link>
        </div>
    )
}

export default SocialLink