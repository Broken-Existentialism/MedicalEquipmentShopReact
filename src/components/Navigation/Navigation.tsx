import { Route, Routes } from "react-router-dom"
import { authRoutes } from "../../routes/routes"
import s from './Navigation.module.css'

const Navigation = () =>{
    
    return(
        <main className={s.Container}>
           <Routes>
                {
                    authRoutes.map((route, index)=><Route path={route.path} key={index} element={route.component} />)
                }
           </Routes>
        </main>
    )
}

export default Navigation