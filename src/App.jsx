import "./App.css";
import desktop from "./assets/images/background-pattern-desktop.svg";
import mobile from "./assets/images/background-pattern-mobile.svg";
import Faqs from "./components/Faqs/Faqs";

function App() {
  return (
    <main>
      <picture>
        <source sizes="max-width: 375px" srcSet={mobile}></source>
        <img src={desktop} alt="desktop" />
      </picture>
      <Faqs />
    </main>
  );
}

export default App;
