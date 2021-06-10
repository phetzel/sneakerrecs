import React from 'react';

const Modal = ({ component, func }) => {
    if (!component) {
        return null;
    }

    const closeModal = () => func();

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;