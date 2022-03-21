import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import {memo} from "react";
import { DataProvider } from '../hooks/DataContext';

function Home(){
    return (
        <div className="home-container">
            <Header/>
            <DataProvider>
                <Main/>
            </DataProvider>
            <Footer/>
        </div>
    );
}

export default memo(Home);