import React from "react";

//import icones
import open from "./open.png";
import favorito from "./favorito.png";

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.imagem}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="icone curtir" />
                <img src={open} alt="icone abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
