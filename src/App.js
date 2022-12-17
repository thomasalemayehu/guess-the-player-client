import "./styles/App.css";
import AppBar from "./components/AppBar";
import GameArea from "./components/GameArea";
// import SupportedLeagues from "./components/SupportedLeagues";
import { guessingGameStore } from "./state/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
      </style>
      <Provider store={guessingGameStore}>
        <>
          <section className="app__main__container">
            {/* <SupportedLeagues /> */}
            <GameArea />
          </section>
          <AppBar />
        </>
      </Provider>
    </div>
  );
}

export default App;
