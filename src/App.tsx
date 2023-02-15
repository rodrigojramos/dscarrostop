import "./App.css";
import CardCar from "./components/CardCar";
import CardComments from "./components/CardComments";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CardCar />
        <CardComments />
      </main>
    </>
  );
}
