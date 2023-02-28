import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {/* <button type="button">close</button> */}
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
