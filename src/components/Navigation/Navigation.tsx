import { Route, Routes } from "react-router-dom"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { authRoutes, adminRoutes } from "../../routes/routes"
import s from './Navigation.module.css'

const Navigation = () =>{
    
    let {role} = useTypeSelector(state => state.userProfile)
    console.log(role)

    return(
        <main className={s.Container}>
           <Routes>
                {role === 'Administrator' 
                    ? adminRoutes.map((route, index)=><Route path={route.path} key={index} element={route.component} />)
                    : authRoutes.map((route, index)=><Route path={route.path} key={index} element={route.component} />)
                }
           </Routes>
        </main>
    )
}

export default Navigation