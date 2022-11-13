import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import { useEffect} from "react"
import { catalogItems, CatalogItemsContext } from './utils/context';
import { getEquipmentById } from './api/api';
import { getAllMedicalEquipments } from './api/medicalEquipmentsServiceApi';


function App() {
  useEffect(()=>{
    
    const fetchData = async () =>{
      
      var result = await getAllMedicalEquipments({
        pageIndex: 1,
        pageSize: 20,
        columnNameForSorting: null,
        sortDirection: null,
        requestFilters: {
          name: null,
          typeName: null,
          brandTitle: null,
        }
      })
      console.log(result.data)
      
    }
    fetchData()
  },[])

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
