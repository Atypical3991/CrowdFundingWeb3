import React from "react";

const CustomButton = ({btnType,title,handleClick, styles}) => {
    return(
        <button
            type={btnType}
            className={`font-epilogue  font-semibold  text-[16px] leading-[16px] text-white min-h-[30px] px-4 rounded-[10px] ${styles}`}
            onClick={handleClick}
            style={{whiteSpace: "nowrap", textAlign: "center"}}
        >
            {title}
        </button>
    )
}

export default CustomButton