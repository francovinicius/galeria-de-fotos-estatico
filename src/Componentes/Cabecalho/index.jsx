//importanto as imagens relacionadas ao cabecalho
import logo from './logo.png'
import search from './search.png'

//importando estilos
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo Space" />
            <div className={styles.cabecalho__container}>
                <input className= {styles.cabecalho__input} type="text" name="" id="" placeholder="O que você procura?"/>
                <img src={search} alt="Icone de busca" />
            </div>
        </header>
    )
}