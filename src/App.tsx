import "./App.css";
import { getNeows } from "./services/neows";

function App() {
  getNeows();
  return (
    <main className="bg-gray-950 text-gray-200 w-screen h-screen p-2">
      {/* <Apod /> */}
    </main>
  );
}

export default App;
