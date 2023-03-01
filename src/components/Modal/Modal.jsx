import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
                <button type="button" onClick={closeModal}>
                    close
                </button>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
