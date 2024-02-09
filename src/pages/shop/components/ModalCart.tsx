import { Basket } from "@phosphor-icons/react";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { removeToCart } from "../../../slices/cartSlice";
import { Character } from "../../../types/Character";
import "./styles.css";

interface ModalCartProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  cart: Character[];
}

function ModalCart({ isModalOpen, setIsModalOpen, cart }: ModalCartProps) {
  const dispatch = useAppDispatch();
  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      {
        <div className="cart-container">
          <h2>Carrinho</h2>
          {cart.length <= 0 && <Basket size={40} />}
          {cart.length > 0 && (
            <>
              {cart.map((character) => (
                <div className="shop-item" key={character.id}>
                  <img src={character.imageOnList} alt={character.name} />
                  <p>{character.name}</p>
                  <p>R$ 50,00</p>
                  <Button onClick={() => dispatch(removeToCart(character.id))}>
                    remover
                  </Button>
                </div>
              ))}
            </>
          )}
        </div>
      }
    </Modal>
  );
}

export default ModalCart;
