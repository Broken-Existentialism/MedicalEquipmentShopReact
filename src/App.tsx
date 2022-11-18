import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { catalogItems, CatalogItemsContext } from './utils/context';

function App() {
  return (
    <div className={s.App}>
      <CatalogItemsContext.Provider value={catalogItems} >
          <Header />
          <Navigation />
          <Footer />
      </CatalogItemsContext.Provider>
    </div>
  );
}

export default App;
