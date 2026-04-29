import styles from "./styles/EmptyState.module.css";

function EmptyState() {
  return (
    <div className={styles.empty}>
      <span className={styles.icon}>📚</span>
      <h2>Biblioteca vazia</h2>
      <span>
        Use os botões "MEC" e "Gutenberg" na barra lateral para <br /> carregar
        livros, ou clique em "+ Adicionar PDF" para <br /> adicionar um arquivo
        local.
      </span>
    </div>
  );
}

export default EmptyState;
