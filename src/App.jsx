import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import AppRouter from "./router";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
