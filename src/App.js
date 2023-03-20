// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

function App() {
  // outside of return() i can write js like usual
  return (
    <div className="page">
      {/* inside return(), i'm writing jsx */}
      <Header />
      {/* <Movie title="Turning Red" year="2022" /> */}
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
