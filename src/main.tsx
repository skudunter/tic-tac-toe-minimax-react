import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./board";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <main className="flex justify-center items-center h-screen bg-neutral-800">
    <Board/>
  </main>
);
