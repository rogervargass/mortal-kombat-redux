import "./styles.css";

import { useState } from "react";
import Button from "../../components/button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { addToCart } from "../../slices/cartSlice";
import { voteCharacter } from "../../slices/charactersSlice";
import ModalCart from "./components/ModalCart";

function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { characters, shopCart } = useAppSelector((state) => state);

  const { charactersToBuy, charactersToVote } = characters;
  const { cart } = shopCart;

  const dispatch = useAppDispatch();

  return (
    <main className="shop-main">
      <ModalCart
        cart={cart}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <h1 className="shop-title">Loja</h1>
      <section className="container shop-content">
        <div className="shop-section">
          <h2 className="shop-subtitle">Itens a venda</h2>
          <section className="characters-to-buy">
            {charactersToBuy.map((character) => (
              <div className="shop-item" key={character.id}>
                <img src={character.imageOnList} alt={character.name} />
                <p>{character.name}</p>
                <p>R$ 50,00</p>
                <Button onClick={() => dispatch(addToCart(character.id))}>
                  Comprar
                </Button>
              </div>
            ))}
          </section>
          <div className="btn-cart-container">
            <Button onClick={() => setIsModalOpen(true)}>
              {`Ver Carrinho (${cart.length})`}
            </Button>
          </div>
        </div>
        <div className="characters-to-vote-container">
          <h2 className="shop-subtitle">Proximo personagem</h2>
          <section className="characters-to-vote">
            {charactersToVote.map((character, index) => (
              <div className="ranking-item" key={character.id}>
                <h3>{index + 1}</h3>
                <img src={character.imageOnList} alt={character.name} />
                <div className="vote-info">
                  <p>Nome: {character.name}</p>
                  <p>Votos: {character.votes}</p>
                </div>
                <div className="btn-cart-container">
                  <Button onClick={() => dispatch(voteCharacter(character.id))}>
                    Votar
                  </Button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

export default Shop;
