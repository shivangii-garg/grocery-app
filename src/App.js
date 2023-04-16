import "./styles.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Grocery App</h1>
      <Left />
      <Right />
      <Footer />
    </div>
  );
}
