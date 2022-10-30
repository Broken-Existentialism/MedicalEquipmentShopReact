import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import { useEffect, useState } from "react"
//import axios from 'axios';
import useFetchData from './hooks/useFetchData';
import { catalogItems, CatalogItemsContext } from './utils/context';
import { deleteEquipmentById, getEquipmentById, postNewEquipment, updateEquipmentById } from './api/api';

function App() {

  let formData = new FormData()
  formData.append('name', 'ECG-UPDATE')
  formData.append('year', '2019')
  formData.append('price', '290000')
  formData.append('brandId', '')
  formData.append('typeId', '')
  formData.append('img', '')

  useEffect(()=>{
    const fetchData = async () =>{
      //post
      //let item = await postNewEquipment(formData)
      //console.log(item.data)

      //get
      //let item = await getEquipmentById(1030)
      //console.log(item.data)

      //delete
      //let item = await deleteEquipmentById(2001)
      //console.log(item.data)

      //update
      //let item = await updateEquipmentById(1035, formData)
      //console.log(item.data)
    }
    fetchData()
  },[])

  /*
  const {data, loading, error} = useFetchData('https://localhost:7201/api/MedicalEquipments?PageIndex=1&PageSize=20')
  console.log(data)
  console.log(loading)
  */
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
