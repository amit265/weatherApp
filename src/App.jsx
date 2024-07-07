import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div className="flex flex-wrap">
        <Weather />
        <Weather />

      </div>
    </>
  );
}

export default App;
