import "./App.css";
import Apod from "./components/apod/Apod";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Neows from "./components/neows/Neows";

function App() {
  
  return (
    <main className="bg-gray-950 text-gray-200 w-screen h-full p-2">
      <Header />
      <Intro />
      <Apod />
      <Neows />
    </main>
  );
}

export default App;
