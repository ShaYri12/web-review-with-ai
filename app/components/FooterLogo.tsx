import Image from 'next/image'
import React from 'react'

const FooterLogo = () => {
  return (
    <div className="flex items-center lg:space-x-[10px] space-x-2 text-white lg:text-[24px] md:text-[18px] text-base">
      <Image
        src="/assets/box.svg"
        alt="box"
        width={27.5}
        height={31.6}
        className="lg:w-[25px] w-[24px] 2xl:h-[31.6px] lg:h-[25px] h-[24px]"
      />
      <span>Polygonal Research, LLC</span>
    </div>
  )
}

export default FooterLogo