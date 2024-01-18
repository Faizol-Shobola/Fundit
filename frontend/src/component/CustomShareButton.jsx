// CustomShareButton.js
import React from "react";
import { RWebShare } from "react-web-share";

const CustomShareButton = ({ shareData, buttonText, moreClass }) => {
    return (
        <RWebShare
            data={shareData}
            sites={["facebook", "twitter", "linkedin", "whatsapp"]}
            onClick={() => console.log("shared successfully!")}
        >
            <button className={`btn-outline block ${moreClass}`}>{buttonText}</button>
        </RWebShare>
    );
};

export default CustomShareButton;
