import { Container } from '@mui/system'
import React from 'react';
import { useState, useEffect, useRef } from "react"
import s from './About.module.css'

const About = () =>{
    /*
    const [numbers, setNumbers] = useState([1, 2 ,3 ,4 ,5, 6])

    const ulRef: any = useRef(null)
    //console.log(ulRef)

    const addNumbers = () =>{
        const lastNumbers = numbers[numbers.length - 1]
        setNumbers([...numbers, lastNumbers + 1])
    }

    const HandleScrol = () =>{
        console.log("Был скрол")
    }

    //let ulElem: any;

    useEffect(()=>{
        ulRef.current.addEventListener('scroll', HandleScrol)
    }, [])

    const RemoveScrol = () =>{
        ulRef.current.removeEventListener('scroll', HandleScrol)
        console.log("remove")
        console.log(ulRef.current)
    }

    return(
        <Container>
            <div className={s.mainBlock}>
                <ul ref = {ulRef} className={s.block} >
                    {
                        numbers.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
                <button onClick={addNumbers}>Добавить число</button>
                <button onClick={RemoveScrol}>Не следить</button>
            </div>
        </Container>
    )
    */

    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

    const timerRef:any = React.useRef();

    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
    };

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000);
    };

    const stop = () => {
        
        console.log(timerRef.current);

        clearInterval(timerRef.current);
    };

    return (
        <Container>
            <div>
                <ul className={s.block}>
                    {numbers.map((n) => (
                    <li key={n}>{n}</li>
                    ))}
                </ul>
                <button onClick={addNumber}>✅ Добавить число</button>
                <button onClick={start}>▶️ Старт</button>
                <button onClick={stop}>⏹ Стоп</button>
            </div>
        </Container>
    );
}

export default About