import { createContext, useState } from "react";

export const modalContext = createContext(null);

function ModalProvider(props){
    const [modal, setModal] = useState({
        show:false,
        message:""
    });
    const showAlert = (msg) => {
        console.log(msg);
        setModal({
            show:true,
            message:msg
        })
    }
    return (<modalContext.Provider value={{showAlert}} {...props}>
        {props.children}
        {modal.show ? <h1>{modal.message}</h1> : null}
    </modalContext.Provider>)
}
export default ModalProvider;