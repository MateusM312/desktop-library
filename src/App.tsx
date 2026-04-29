import SideBar from "./components/SideBar";
import styles from "./components/styles/App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <SideBar></SideBar>
      <main className={styles.main}></main>
    </div>
  );
}

export default App;
