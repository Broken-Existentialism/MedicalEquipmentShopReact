import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className={s.App}>
          <Header />
          <Navigation />
          <Footer />
    </div>
  );
}

export default App;
