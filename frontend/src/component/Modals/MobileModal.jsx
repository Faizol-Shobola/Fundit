import CustomShareButton from "../CustomShareButton";

const MobileModal = ({ isOpen, onClose }) => {

  const shareData = {
    text: "Check out GeeksforGeeks!",
    url: "https://www.geeksforgeeks.org",
    title: "GeeksforGeeks",
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-0 transition-all duration-500 md:hidden ${
        isOpen ? "h-44" : "h-0"
      } bg-white overflow-y-auto`}
    >
      <div className="grid grid-cols-1 gap-4 p-5">

          <CustomShareButton shareData={shareData} buttonText="Share" />

          <a className="btn" href="/">
          Donate
          </a>
        <button
          className="text-gray-500 font-bold"
          onClick={onClose}
      >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileModal;