import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

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


export function DataProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState([]);
    const [structureArray, setStructureArray] = useState([]);
    
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

            let structureArray = dataReturned.map((dataArray, index) => {
                return [...Array(Object.values(dataArray)[0].length).keys()]
            });
            setStructureArray(structureArray);
            
            setLoading(false);

        });
    }, [])
    return (
        <DataContext.Provider value={{loading, dataFetched, structureArray}}>
        {children}
        </DataContext.Provider>
    );
}