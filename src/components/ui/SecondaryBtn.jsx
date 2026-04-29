import React from 'react'

const SecondaryBtn = ({
    className = "",
    text = "Secondary Button",
    link = "#",
    icon: Icon,
}) => {
  return (
    <div>
        <a
            href={link}
            className={`flex justify-center items-center font-semibold px-4.5 py-2 rounded-lg border border-[#704CFA] text-[#704CFA] px-6 py-2 rounded-lg  transition ${className}`}
          >
            {text} {Icon && <Icon />}
          </a>
    </div>
  )
}

export default SecondaryBtn