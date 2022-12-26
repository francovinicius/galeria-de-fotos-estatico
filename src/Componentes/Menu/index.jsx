import React from 'react'

//importando os icones
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav>
        <ul>
            <li>
                <img src={home} alt="" />
                <a href="/">Inicio</a>
            </li>
            <li>
                <img src={maisCurtidas} alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            <li>
                <img src={maisVistas} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            <li>
                <img src={novas} alt="" />
                <a href="/">Novas</a>
            </li>
            <li>
                <img src={surpreendaMe} alt="" />
                <a href="/">Surprienda-me</a>
            </li>
        </ul>
    </nav>
  )
}
