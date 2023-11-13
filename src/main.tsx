import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./board";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <main className="flex justify-center items-center h-screen bg-neutral-800">
      <div>
        <Board />
      </div>
    </main>
    <footer className="flex justify-center items-center w-full bottom-0 h-16 bg-neutral-800 fixed">
      <p className="text-center text-white">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/michal-josef-spacek"
          target="_blank"
          rel="noreferrer"
        >
          <a
            className="underline decoration-white"
            href="https://www.skudunter.com/"
          >
            skudunter
          </a>
        </a>
      </p>
    </footer>
  </>
);
