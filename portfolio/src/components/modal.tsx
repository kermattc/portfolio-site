import './../styles/modal.css';
import { AiOutlineClose } from "react-icons/ai";

import { useRef, useEffect } from 'react';

interface ModalProps {
    modalToggle: (isModalOpen: boolean) => void,
    openLink: () => void
}

const Modal = ({ modalToggle, openLink }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // basically checks if a mouseclick is outside of the ref. If such thing happens, then remove this modal
                // .current property points to the DOM element. Basically checks if it exists, or that it is not null. it is needed to use the other if statement thanks to typescript
                // ... .contains(event.target as Node) checks if the event.target, being a mouseclick, is NOT inside the ref. 
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                // console.log("Clicked outside of modal");
                modalToggle(false);
            }
        }

        // bind event listener to the document when the component is mounted
        document.addEventListener("mousedown", handleClickOutside);

        // cleanup function. called when the dependency changes, or in this case when I want to unmount this modal component. Which in this case will always change to false
        return () => {
            // unbind event listener on clean up, prevent memory leaks and all that
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [modalToggle])

    return (
        <div className='modalBackground'>
            <div className='modalContainer' ref={modalRef}>
                <div className='exitBtn'>
                    <AiOutlineClose className='exitIcon' onClick={() => modalToggle(false)}
                        />
                </div>
                <div className='titleContainer'>
                    <h1 className="modalTitle">Preview Demo</h1>
                </div>
                <div className='body'/>
                <div className="footer">
                    <button className='cancelBtn' onClick={() => modalToggle(false)}>Cancel</button>
                    <button className='goBtn' onClick={openLink}>Open Link</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
