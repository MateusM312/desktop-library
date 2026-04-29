import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import styles from "./components/styles/App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <SideBar></SideBar>
      <main className={styles.main}>
        <TopBar></TopBar>
      </main>
    </div>
  );
}

export default App;
