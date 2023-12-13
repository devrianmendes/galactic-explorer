import "./App.css";
import Apod from "./components/apod/Apod";
import Neows from "./components/neows/Neows";

function App() {
  // getNeows();
  return (
    <main className="bg-gray-950 text-gray-200 w-screen h-full p-2">
      <Apod />
      <Neows />
    </main>
  );
}

export default App;
