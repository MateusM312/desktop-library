import styles from "./styles/StatusBar.module.css";

function StatusBar() {
  return (
    <div className={styles.statusbar}>
      <div className={styles.status}>
        <span className={styles.dot}></span>
        <span>Aguardando</span>
      </div>
      <div className={styles.tuto}>
        <span>Esc</span>
        <span className={styles.bolha}>fechar</span>
      </div>
    </div>
  );
}
export default StatusBar;
