import React from 'react';
import './css/userprofile.css'

function UserProfile() {
  return (
    <div className="user-profile">
        <h2>Olá, Leonardo</h2>
        <p>Ative as notificações</p>
        <p>Acompanhe de perto o andamento dos seus pedidos, promoções e novidades.</p>
        <a href="link-para-notificacoes">Ativar</a>

        <div className="profile-links">
          <a href="link-para-chats">Chats</a>
          <a href="link-para-pedidos">Pedidos</a>
          <a href="link-para-cupons">Meus Cupons</a>
          <a href="link-para-favoritos">Favoritos</a>
          <a href="link-para-pagamento">Pagamento</a>
          <a href="link-para-fidelidade">Fidelidade</a>
          <a href="link-para-ajuda">Ajuda</a>
          <a href="link-para-dados">Meus dados</a>
          <a href="link-para-seguranca">Segurança</a>
          <a href="link-para-sair">Sair</a>
        </div>
      </div>
  )
}

export default UserProfile;