import './../App.css';

interface ModalProps {
    modalToggle: (isModalOpen: boolean) => void,
}

const Modal = ({ modalToggle }: ModalProps) => {
    return (
        // <div className='modalBackground' onClick={(e) => e.stopPropagation()}>
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={(e) => {
                    console.log("Closing modal...");
                    modalToggle(false);
                }}> 
                    X 
                </button>
                <div className='test'>Test content</div>
            </div>
        </div>
    )
}

export default Modal;
