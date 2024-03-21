import React, { useState, useEffect } from 'react';
import './css/restaurante.css';
import Modal from './Modal';
import UserProfile from './UserProfile';
import GeoCode from '../auth/GeoCode'; 

function Restaurantes() {
  const [showProfileModal, setShowProfileModal] = useState(false); // Estado para a exibição das informações do perfil
  const [showLanchonetesModal, setShowLanchonetesModal] = useState(false); // Estado para a exibição das lanchonetes
  const [showCreateRestaurantMenu, setShowCreateRestaurantMenu] = useState(false); // Estado para a exibição do menu de criação de restaurante
  const [showAddressModal, setShowAddressModal] = useState(false); // Estado para a exibição do pop-up de endereço
  const [userLocation, setUserLocation] = useState(null); // Estado para armazenar as coordenadas de geolocalização do usuário
  const [searchAddress, setSearchAddress] = useState('');

  // Função para abrir as informações do perfil do usuário
  const handleUserProfileClick = () => {
    setShowProfileModal(true);
  };

  // Função para fechar o modal do perfil
  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };

  // Função para abrir o modal das lanchonetes
  const handleLanchesClick = () => {
    setShowLanchonetesModal(true);
  };

  // Função para fechar o modal das lanchonetes
  const handleCloseLanchonetesModal = () => {
    setShowLanchonetesModal(false);
  };

  // Função para mostrar o menu de criação de restaurante
  const handleRestaurantMouseOver = () => {
    setShowCreateRestaurantMenu(true);
  };

  // Função para esconder o menu de criação de restaurante
  const handleRestaurantMouseOut = () => {
    setShowCreateRestaurantMenu(false);
  };


  // Função para fechar o pop-up de endereço
  const handleCloseAddressModal = () => {
    setShowAddressModal(false);
  };

  // Efeito de inicialização para abrir o pop-up de endereço ao carregar a página
  useEffect(() => {
    setShowAddressModal(true);

    // Função para obter as coordenadas de geolocalização do usuário
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        }, (error) => {
          console.error('Erro ao obter a localização:', error);
        });
      } else {
        console.error('Geolocalização não é suportada pelo navegador.');
      }
    };

    // Função para obter a localização do usuário
    getLocation();
  }, []);

  // Função para lidar com a submissão do formulário de busca de endereço
const handleSearchAddress = (e) => {
  e.preventDefault();
};

  return (
    <div className="restaurantes">
      <header className="header">
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="inicio">Início</a></li>
            <li className="nav-item" onMouseOver={handleRestaurantMouseOver} onMouseOut={handleRestaurantMouseOut}>
              <a href="restaurantes">Restaurantes</a>
              {showCreateRestaurantMenu && (
                <ul className="sub-menu">
                  <li><a href="criarRestaurante">Criar Restaurante</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item"><a href="mercados">Mercados</a></li>
            <li className="nav-item"><a href="bebidas">Bebidas</a></li>
            <li className="nav-item"><a href="farmacias">Farmácias</a></li>
            <li className="nav-item"><a href="pets">Pets</a></li>
            <li className="nav-item"><a href="shopping">Shopping</a></li>
          </ul>
        </div>

        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Busque por item ou loja" />
          <div className="search-icon">
            <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-rouge.png" alt="Lupa" />
          </div>
        </div>

        <div className="header-content">
          <div className="user-profile" onClick={handleUserProfileClick}>
            <img src="https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png" alt="Perfil" />
          </div>
          <div className="price-info">
            <p>R$ 0,00</p>
            <p>0 itens</p>
          </div>
        </div>

      </header>
      <div className="main">
        <div className="restaurant-list">
          <h2>Categorias</h2>
          <ul className="category-list">
            <li className="category-item" onClick={handleLanchesClick}>
              <img src="https://img.freepik.com/vetores-premium/lanche-delicioso-de-fast-food-com-coca-cola-de-hamburguer-e-legumes-frescos-em-uma-ilustracao-de-fundo-branco-ilustracao-de-coca-cola-quente-e-picante-de-batatas-fritas_759447-756.jpg" alt="Lanches" />
              Lanches
            </li>
            <li className="category-item">Promoções</li>
            <li className="category-item">Pizza</li>
            <li className="category-item">Japonesa</li>
            <li className="category-item">Doces & Bolos</li>
            <li className="category-item">Brasileira</li>
            <li className="category-item">Açaí</li>
            <li className="category-item">Árabe</li>
            <li className="category-item">Chinesa</li>
            <li className="category-item">Sorvetes</li>
            <li className="category-item">Italiana</li>
            <li className="category-item">Padarias</li>
            <li className="category-item">Carnes</li>
            <li className="category-item">Vegetariana</li>
            <li className="category-item">Gourmet</li>
            <li className="category-item">Pastel</li>
            <li className="category-item">Marmita</li>
            <li className="category-item">Salgados</li>
            <li className="category-item">Saudável</li>
          </ul>
          <h2>Destaques</h2>
          <ul className="highlight-list">
            <li className="highlight-item">Famosos a partir de R$4,99</li>
            <li className="highlight-item">Hambúrguer com frete grátis</li>
            <li className="highlight-item">Famosos com descontão</li>
            <li className="highlight-item">Pizzas com promo</li>
            <li className="highlight-item">30% OFF com o Méqui</li>
            <li className="highlight-item">Restaurantes queridinhos</li>
            <li className="highlight-item">Entrega grátis!</li>
            <li className="highlight-item">Quem quer cupom?</li>
            <li className="highlight-item">Até 50% OFF</li>
            </ul>
            <h2>Últimas Lojas</h2>
            <ul className="store-list">
            <li className="store-item">Ex-touro - Burger Freguesia do Ó</li>
            <li className="store-item">Max Restaurante, Lanches e Pasteis.</li>
            <li className="store-item">Rick Sorvetes e Açaí- Loja 1</li>
            <li className="store-item">O Burguês - Burger Freguesia do Ó</li>
            <li className="store-item">Banketto - Freguesia / Zona Norte</li>
            <li className="store-item">Hamer Confeitaria</li>
            </ul>
            </div>
            </div>
            {/* Modal para exibir as informações do perfil do usuário */}
      {showProfileModal && (
        <Modal onClose={handleCloseProfileModal}>
          {/* Conteúdo do modal com as informações do perfil do usuário */}
          <UserProfile />
        </Modal>
      )}

      {/* Modal para exibir as lanchonetes */}
      {showLanchonetesModal && (
        <Modal onClose={handleCloseLanchonetesModal}>
          {/* Conteúdo do modal com as lanchonetes */}
          <div>
            <h2>Lanchonetes Disponíveis</h2>
            <ul>
              <li>Nome da Lanchonete 1</li>
              <li>Nome da Lanchonete 2</li>
              <li>Nome da Lanchonete 3</li>
            </ul>
          </div>
        </Modal>
      )}

      {/* Modal para exibir o pop-up de endereço e geolocalização */}
{showAddressModal && (
  <Modal onClose={handleCloseAddressModal}>
    <div className="modal-content">
      <h2>Onde você quer receber seu pedido?</h2>
      <br></br>
      <form className="address-form" onSubmit={handleSearchAddress}>
      <input
  type="text"
  placeholder="Digite seu endereço e número"
  value={searchAddress}
  onChange={(e) => setSearchAddress(e.target.value)}
/>
      </form>
      <ul className="address-list">
        <li>Casa - Rua Alcino Fidélis, 27</li>
        <li>Trabalho - R. Teodoro Sampaio, 2700, 9 Andar</li>
      </ul>
      <GeoCode /> {/* Componente para obter a localização atual do usuário */}
    </div>
  </Modal>
)}
    </div>
  );
}

export default Restaurantes;