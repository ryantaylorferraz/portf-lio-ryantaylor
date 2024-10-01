import { createContext, useContext, useEffect, useState } from "react";

export const ModalContext = createContext({});


export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    
    const toggleModal = () => {
        setOpenModal(!openModal)
    }


    return (
        <ModalContext.Provider value={{toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext);
