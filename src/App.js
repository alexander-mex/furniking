import Navbar from "./Components/Layouts/Header/Navbar";
import Header from "./Components/Layouts/Header/Header";
import Burger from "./Components/Layouts/Header/Burger";
import Menu from "./Components/Layouts/Header/Menu";
import Main from "./Components/Layouts/Main/Main";
import Trending from "./Components/Layouts/Main/Trending";
import Offer from "./Components/Layouts/Main/Offer";
import Products from "./Components/Layouts/Main/Products";
import Reviews from "./Components/Layouts/Main/Reviews";
import Articles from "./Components/Layouts/Main/Articles";
import Footer from "./Components/Layouts/Footer/Footer";

function App() {
  return (
    <div>
      <Burger />
      <Navbar />
      <Header />
      <Menu />
      <Main />
      <Trending />
      <Offer />
      <Products />
      <Reviews />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
