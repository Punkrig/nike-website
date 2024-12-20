
const Button = ({label,iconUrl, backgroundColor,
  textColor, borderColor, fullWidh
}) => {
  return (
    <button className={`flex
    justify-center items-center
    gap-2 px-7 py-4 border font-montserrat
    text-lg leading-none
    ${
      backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      :"bg-coral-red  border-coral-red text-white"
    } rounded-full ${fullWidh && 'w-full'}"}`}
    >
        {label}

        {iconUrl && <img 
        src={iconUrl} 
        alt="arrow rigth icon" 
        className="ml-2 rounded-full
        w-5 h-5"
        />}
    </button>
)
}

export default Button