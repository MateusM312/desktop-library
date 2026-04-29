import styles from "./styles/TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.topbar}>
      <input
        type="text"
        className={styles.search}
        placeholder="🔍 Buscar título, autor, assunto..."
      />
    </div>
  );
}

export default TopBar;
