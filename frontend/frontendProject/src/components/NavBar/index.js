import styles from './navbar.module.css';

export default function Navbar(){
    return <header>
                <div className={styles.navbar}>
                    <h2 className={styles.h2}>AGENDA DE CONTATOS</h2>
                </div>
    </header>
}