import styles from "./components/styles/App.module.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Tabs from "./components/tabs";
import EmptyState from "./components/EmptyState";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className={styles.layout}>
      <SideBar></SideBar>
      <main className={styles.main}>
        <TopBar></TopBar>
        <Tabs></Tabs>
        <EmptyState></EmptyState>
        <StatusBar></StatusBar>
      </main>
    </div>
  );
}

export default App;
