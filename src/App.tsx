import "./App.css";
import CardCar from "./components/CardCar";
import CardComments from "./components/CardComments";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CardCar />
        <CardComments />
      </main>
      <Footer />
    </>
  );
}
