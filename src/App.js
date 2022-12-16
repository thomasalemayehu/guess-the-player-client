import { useEffect } from "react";
import "./styles/App.css";
import AppBar from "./components/AppBar";
import GameArea from "./components/GameArea";
import SupportedLeagues from "./components/SupportedLeagues";
import { guessingGameStore } from "./state/store";
import { Provider } from "react-redux";
function App() {
  useEffect(() => {
    console.log("Setting game session");
  }, []);

  return (
    <div className="App">
      <Provider store={guessingGameStore}>
        <>
          <AppBar />
          <section className="app__main__container">
            <SupportedLeagues />
            <GameArea />
          </section>
        </>
      </Provider>
    </div>
  );
}

export default App;
