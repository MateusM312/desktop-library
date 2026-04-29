import styles from "./styles/Sidebar.module.css";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.show}>
          <span>📚</span>
        </div>
        <div className={styles.bibliotecas}>
          <p>Biblioteca Digital</p>
          <span>MEC + Gutenberg</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <p className={styles.label}>Categorias</p>
        <a className={styles.item}>🦇 Terror</a>
        <a className={styles.item}>🔎 Mistério</a>
        <a className={styles.item}>😱 Suspense</a>
        <a className={styles.item}>🎭 Drama</a>
        <a className={styles.item}>💚 Romance</a>
        <a className={styles.item}>🇧🇷 Nacional</a>
      </nav>

      <div className={styles.footer}>
        <div className={styles.btnrow}>
          <button className={styles.btnMec}>🇧🇷 MEC</button>
          <button className={styles.btnGut}>🌿Gutenberg</button>
        </div>
        <button className={styles.btnPdf}>+ Adicionar PDF</button>
      </div>
    </aside>
  );
}

export default SideBar;
