import React, { useState } from 'react';
import db from '../components/db.json'

const RestauranteModal = ({ restaurantId, onClose }) => {


  const [restaurantDetails, setRestaurantDetails] = useState({
    id: db.id,
    name: db.name,
    endereco: db.endereco,
    telefone: db.telefone,
    cnpj: db.cnpj,
    horarioInicioExp: db.horarioInicioExp,
    horarioFimExp: db.horarioFimExp,
    valorMinimoPedido: db.valorMinimoPedido
  });

  // Função para fechar o modal
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>{restaurantDetails.name}</h2>
        <p>{restaurantDetails.endereco}</p>
        <p>{restaurantDetails.telefone}</p>
        <p>{restaurantDetails.horarioInicioExp}</p>
      </div>
    </div>
  );
};

export default RestauranteModal;
