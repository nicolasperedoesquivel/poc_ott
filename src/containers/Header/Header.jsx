import {useState} from 'react';
import {images} from '../../App';
import Button from '../../components/Button/Button';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import InputText from '../../components/InputText/InputText';


function Header(){
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }
    return(
        <header className="header-container">
            <nav className="header-container__nav-container">
                <div className="app-logo">
                    <ImageContainer
                        imgSrc={images('./camera-film-icon.svg')}
                        altName="camera-film"
                        className="app-logo__img"
                    />
                </div>
                <div className="search-container">
                <InputText
                    type="text"
                    name="search-input"
                    value={searchValue}
                    className="search-container__input"
                    onChange={handleInputChange}
                />
                <Button
                    className="search-container__button"
                    childrenComponent={<ImageContainer
                        imgSrc={images('./search-icon.svg')}
                        altName="search-icon"
                        className="search-container__button__img"
                    />}
                />
                
                </div>
            </nav>
        </header>
    );
}

export default Header;