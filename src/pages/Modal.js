import React from 'react';
import './css/modal.css';

function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;