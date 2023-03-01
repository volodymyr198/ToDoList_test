import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
                <button
                    className={styles.btnModal}
                    type="button"
                    onClick={closeModal}
                >
                    close
                </button>
            </div>
        </div>,
        modalRoot
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default Modal;
