import { useState, useEffect } from 'react';
import Section from './Section/Section';

function Main(){
    const [resultArray, setResultArray] = useState([]);
    useEffect(() => {
        async function getData(){
            let res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=8ef2123ffd56c908698fe9075b4b450b&limit=5');
            let data = await res.json();
            console.log(data);
            setResultArray(data.data);
        } 

        getData()
        console.log(resultArray);
    }, [])
    console.log(resultArray);

    return(
        <div className="main-container">
            Simple main
            { resultArray.length &&
                "hola"
                /* resultArray.map((dataArray, index) => {
                    return <Section
                        key={index}
                        dataToDisplay={dataArray}
                    />
                }) */
            }
        </div>
    );
}

export default Main;