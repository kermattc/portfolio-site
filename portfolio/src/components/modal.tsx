import './../styles/modal.css';
import baseballGif from '../assets/gifs/baseball-stats-demo.gif';
import { AiOutlineClose } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRef, useEffect } from 'react';

interface ModalProps {
    modalToggle: (isModalOpen: boolean) => void,
    openLink: () => void,
    demoLink: string,
    type: string
}

const Modal = ({ modalToggle, openLink, demoLink, type }: ModalProps) => {
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

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                modalToggle(false);
            }
        };

        // bind event listener to the document when the component is mounted
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        // cleanup function. called when the dependency changes, or in this case when I want to unmount this modal component. Which in this case will always change to false
        return () => {
            // unbind event listener on clean up, prevent memory leaks and all that
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)

        };
    }, [modalToggle]);

    return (
        <>  
            <div className='modalBackground'>
                <div className='modalContainer' ref={modalRef}>
                    <div className='exitBtn'>
                        <AiOutlineClose className='exitIcon' onClick={() => modalToggle(false)}
                            />
                    </div>
                    <div className='titleContainer'>
                    { type === 'thesis' && (
                        <h1 className="modalTitle">Demo Video</h1>
                    )}
                    { type === 'baseball-maintenance' && (
                        <h1 className="modalTitle">Baseball Stats Website Demo</h1>
                    )}
                    </div>
                    <div className='body'>
                    { type === 'thesis' && (
                        <div className="ratio ratio-16x9">
                            <iframe src={demoLink} title="YouTube video" allowFullScreen></iframe>
                        </div>    
                    )}
                    { type === 'baseball-maintenance' && (
                        <div className="ratio ratio-16x9">
                            <img src={baseballGif} alt="loading..." title="Baseball Stats Website Demo"></img>
                        </div>    
                    )}
                    </div>
                    { type === 'thesis' && (
                        <div className="footer">
                            <button className='cancelBtn' onClick={() => modalToggle(false)}>Cancel</button>
                            <button className='goBtn' onClick={openLink}>Go to thesis page</button>
                        </div>
                    )}
                    { type === 'baseball-maintenance' && (
                        <div className="footer">
                            <button className='cancelBtn' onClick={() => modalToggle(false)}>Cancel</button>
                            <div className='maintenance-notice'> Site is currently down, sorry!</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Modal;
