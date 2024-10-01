import { createContext, useContext, useEffect, useState } from "react";

export const ModalContext = createContext({});


export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    console.log(openModal);
    
    
    const toggleModal = () => {
        setOpenModal(!openModal)
    }


    return (
        <ModalContext.Provider value={{openModal, toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext);
