import React from 'react'

const ContactUsBtn = ( {
    className = "",
    text = "Contact Us",
    link = "#",
    icon: Icon,
}) => {
  return (
    <div>
        <a href={link}
          aria-label={text}
          className={`flex justify-center items-center font-semibold px-4.5 py-2 rounded-lg bg-gradient-to-r from-[#1C2483] to-[#704CFA] text-white hover:shadow-lg hover:opacity-90 transition-all duration-200 ${className}`}>
          {text} {Icon && <Icon />}
        </a>
    </div>
  )
}

export default ContactUsBtn