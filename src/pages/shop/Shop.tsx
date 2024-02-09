import "./styles.css";

import { Basket } from "@phosphor-icons/react";
import { useState } from "react";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { addToCart } from "../../slices/cartSlice";
import { voteCharacter } from "../../slices/charactersSlice";

function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { characters, shopCart } = useAppSelector((state) => state);

  const { charactersToBuy, charactersToVote } = characters;
  const { cart } = shopCart;

  const dispatch = useAppDispatch();

  return (
    <main className="shop-main">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {
          <div>
            <h2>Carrinho</h2>
            {cart.length <= 0 && <Basket size={32} />}
            {cart.length > 0 && (
              <ul>
                {cart.map((character) => (
                  <li key={character.id}>{character.name}</li>
                ))}
              </ul>
            )}
          </div>
        }
      </Modal>
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
        <div className="characters-to-vote">
          <h2 className="shop-subtitle">Escolha o proximo personagem</h2>
          <section className="characters-to-buy">
            {charactersToVote.map((character) => (
              <div className="shop-item" key={character.id}>
                <img src={character.imageOnList} alt={character.name} />
                <p>{character.name}</p>
                <p>{character.votes}</p>
                <Button onClick={() => dispatch(voteCharacter(character.id))}>
                  Votar
                </Button>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

export default Shop;
