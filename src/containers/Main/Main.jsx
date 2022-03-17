import { useState, useEffect } from 'react';
import Section from './Section/Section';

const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=8ef2123ffd56c908698fe9075b4b450b&language=en-US&page=1'
const POPULAR_TV_SHOWS_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=8ef2123ffd56c908698fe9075b4b450b&language=en-US&page=1';

const URLS_TO_FETCH = [
    {
        'url': POPULAR_MOVIES_URL,
        'type': 'movies',
    },
    {
        'url': POPULAR_TV_SHOWS_URL,
        'type': 'shows',
    },
];


function Main(){
    const [loading, setLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState([]);

    useEffect(() => {
        async function getData(urlToFetch, type){
            try{
                let res = await fetch(urlToFetch);
                let data = await res.json();
                
                return {[type]: data.results};
            }catch(err) {
                setLoading(false);
                throw Error(err);
            }
        }

        let pendingPromises = [];
        URLS_TO_FETCH.forEach(singleUrl => {
            pendingPromises.push(getData(singleUrl.url, singleUrl.type));        
        });

        Promise.all(pendingPromises).then(dataReturned => {
            setDataFetched(dataReturned);
            setLoading(false);
        });
    }, [])

    !loading && console.log(dataFetched);

    return(
        <main className="main-container">
            Simple main
            { !loading &&
                dataFetched.map((dataArray, index) => {
                    console.log(Object.keys(dataArray)[0]);
                    return <Section
                        key={index}
                        dataToDisplay={dataArray}
                    />
                })
            }
        </main>
    );
}

export default Main;