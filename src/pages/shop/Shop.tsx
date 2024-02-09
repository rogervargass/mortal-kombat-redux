import "./styles.css";

import Button from "../../components/button/Button";
import characters from "../../data/characters.json";

function Shop() {
  return (
    <main className="shop-main">
      <h1 className="shop-title">Loja</h1>
      <section className="container shop-content">
        <div className="shop-section">
          <h2 className="shop-subtitle">Itens a venda</h2>
          <section className="characters-to-buy">
            <div className="shop-item">
              <img src={characters[7].imageOnList} alt={characters[7].name} />
              <p>{characters[7].name}</p>
              <p>R$ 50,00</p>
              <Button
                onClick={() => console.log(`comprei o ${characters[7].name}`)}
              >
                Comprar
              </Button>
            </div>
            <div className="shop-item">
              <img src={characters[8].imageOnList} alt={characters[8].name} />
              <p>{characters[8].name}</p>
              <p>R$ 50,00</p>
              <Button
                onClick={() => console.log(`comprei o ${characters[8].name}`)}
              >
                Comprar
              </Button>
            </div>
          </section>
          <div className="btn-cart-container">
            <Button onClick={() => console.log("abrir carrinho")}>
              Ver Carrinho
            </Button>
          </div>
        </div>
        <div className="characters-to-vote">
          <h2 className="shop-subtitle">Escolha o proximo personagem</h2>
          <section className="characters-to-buy">
            <div className="shop-item">
              <img src={characters[10].imageOnList} alt={characters[10].name} />
              <p>{characters[7].name}</p>
              <p>60%</p>
              <Button
                onClick={() => console.log(`comprei o ${characters[10].name}`)}
              >
                Votar
              </Button>
            </div>
            <div className="shop-item">
              <img src={characters[11].imageOnList} alt={characters[11].name} />
              <p>{characters[11].name}</p>
              <p>40%</p>
              <Button
                onClick={() => console.log(`comprei o ${characters[11].name}`)}
              >
                Votar
              </Button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Shop;
