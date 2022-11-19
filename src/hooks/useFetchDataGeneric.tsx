import { useEffect, useState } from "react"

export default function useFetchDataGeneric<TItems>(callback: any): any {

    const [items, setItems] = useState<TItems[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(()=>{

        const fetchData = async () =>{
            setLoading(true)
            try{
                var result = await callback()
                setItems(result.data.items)
            }
            catch(error){
                setError(error)
            }
            setLoading(false)
        }
    
        fetchData()
      },[])

    return {items: items, loading: loading, error: error}
}
