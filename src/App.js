import { useEffect } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import GameArea from './components/GameArea';
import SupportedLeagues from './components/SupportedLeagues';

function App() {
  const mainContainer = {
    display: "flex",
    height: "calc(100vh - 20px)",
    width: "100%",
    padding:"12px 20% 0 15%",
    alignItems:'center',
    gap:"220px"
  };

  useEffect(()=>{
    console.log('Setting game session');
  },[]);

  return (
    <div className="App">
      <>
      <AppBar />
        <section style={mainContainer}>
          <SupportedLeagues />
          <GameArea />
        </section>
      </>
    </div>
  );
}

export default App;
