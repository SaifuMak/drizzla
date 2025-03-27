import { useEffect } from "react";

const useDisableScroll = (isModalOpen) => {


    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Disable scroll
        } else {
            document.body.style.overflow = ""; // Re-enable scroll
        }

        return () => {
            document.body.style.overflow = ""; // Cleanup when unmounting
        };
    }, [isModalOpen]);
};
export default useDisableScroll;