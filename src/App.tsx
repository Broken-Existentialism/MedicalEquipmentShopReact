import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import { useEffect} from "react"
import { catalogItems, CatalogItemsContext } from './utils/context';
import { useTypeSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useActions';


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
