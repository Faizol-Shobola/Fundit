import { RWebShare } from "react-web-share";


const useCustomShare = () => {
    const share = RWebShare();

    const handleShare = (data) => {
        if (share.isSupported) {
            share.open(data);
        } else {
            // Fallback for browsers that don't support native sharing
            console.log("Sharing not supported, implement fallback here");
        }
    };

    return handleShare;
};

export default useCustomShare;
