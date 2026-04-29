import { useState } from "react";
import styles from "./styles/Tabs.module.css";

const abas = ["Todos", "🇧🇷 MEC", "🌿 Gutenberg", "📁 Meus PDFs"];

function Tabs() {
  const [ativa, setAtiva] = useState("Todos");

  return (
    <div className={styles.tabs}>
      {abas.map((aba) => (
        <button
          key={aba}
          onClick={() => setAtiva(aba)}
          className={aba === ativa ? styles.tabAtiva : styles.tab}
        >
          {aba}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
