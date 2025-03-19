import { useState } from 'react';

const useContactModal = () => {
    const [isContactModal, setIsContactModal] = useState(false);
    return { isContactModal, setIsContactModal };
};

export default useContactModal;
