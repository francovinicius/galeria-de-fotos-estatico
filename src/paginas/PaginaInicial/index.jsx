//import do banner
import banner from './banner.png';

//import de estilo
import styles from './PaginaInicial.module.scss';

//import de componentes
import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";



export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />

                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da Terra vista do espaço" />
                    </div>
                </section>
            </main>
            
        </>
        
    )
}