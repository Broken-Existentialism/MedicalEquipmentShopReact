import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

//import { useEffect, useState } from "react"
//import axios from 'axios';
import useFetchData from './hooks/useFetchData';
import { catalogItems, CatalogItemsContext } from './utils/context';

function App() {

  /*
  const [equipment, setEquipment] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      var result = await axios.get('https://localhost:7201/api/MedicalEquipments?PageIndex=1&PageSize=20')
      setEquipment(result.data)
      console.log(result.data.items)
    }
    fetchData()
  },[])

  console.log(equipment)
  */

  const {data, loading, error} = useFetchData('https://localhost:7201/api/MedicalEquipments?PageIndex=1&PageSize=20')
  console.log(data)


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
