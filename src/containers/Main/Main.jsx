import { useState, useEffect, useContext, useRef, memo} from 'react';
import Section from './Section/Section';
import { DataContext } from '../../hooks/DataContext';


function Main() {
    const [activeSection, setActiveSection] = useState(0);
    const [activeCard, setActiveCard] = useState(0);
    const { loading, dataFetched, structureArray } = useContext(DataContext);

    /* const changeActive = useCallback(        
        (e) => {
            console.log("inside", structureArray);
                if (e.key === "ArrowUp") {
                    setActiveSection((activeSection) => (activeSection - 1 < 0 ? structureArray.length - 1 : activeSection - 1));
                } else if (e.key === "ArrowDown") {
                    setActiveSection((activeSection) => (activeSection + 1 > structureArray.length - 1 ? 0 : activeSection + 1));
                } else if (e.key === "ArrowLeft") {
                    // If supposed previous child is < 0 set it to last child
                    setActiveCard((activeCard) => (activeCard - 1 < 0 ? structureArray[activeSection].length - 1 : activeCard - 1));
                } else if (e.key === "ArrowRight") {
                    // If supposed next child is > length -1 set it to first child
                    setActiveCard((activeCard) => (activeCard + 1 > structureArray[activeSection].length - 1 ? 0 : activeCard + 1));
                } 
        }, [structureArray]
    ); */
    const cardRef = useRef([]);

    useEffect(() => {
        const changeActive = (e) => {
            e.preventDefault();
            if (e.key === "ArrowUp") {
                setActiveSection((activeSection) =>
                    activeSection - 1 < 0
                        ? structureArray.length - 1
                        : activeSection - 1
                );
            } else if (e.key === "ArrowDown") {
                setActiveSection((activeSection) =>
                    activeSection + 1 > structureArray.length - 1
                        ? 0
                        : activeSection + 1
                );
            } else if (e.key === "ArrowLeft") {
                setActiveCard((activeCard) =>
                    activeCard - 1 < 0
                        ? structureArray[activeSection].length - 1
                        : activeCard - 1
                );
                let cardIndex =
                    activeCard - 1 < 0
                        ? structureArray[activeSection].length - 1
                        : activeCard - 1;
                const prevItem = cardRef.current[activeSection][cardIndex];
                prevItem && prevItem.scrollIntoView({ block: "start" });

                console.log("ArrowLeft", activeCard);
            } else if (e.key === "ArrowRight") {
                setActiveCard((activeCard) =>
                    activeCard + 1 > structureArray[activeSection].length - 1
                        ? 0
                        : activeCard + 1
                );
                let cardIndex =
                    activeCard + 1 > structureArray[activeSection].length - 1
                        ? 0
                        : activeCard + 1;
                const nextItem = cardRef.current[activeSection][cardIndex];
                nextItem && nextItem.scrollIntoView({ block: "end" })
                console.log("ArrowRight", activeCard);

                
            }
        };

        document.addEventListener("keydown", changeActive);
        return () => document.removeEventListener("keydown", changeActive);
    }, [activeSection, activeCard, structureArray]);

    console.log(cardRef);
    
    

    return (
        <main className="main-container">
            {!loading &&
                dataFetched.map((dataArray, index) => {
                    return (
                        <Section
                            key={index}
                            dataToDisplay={dataArray}
                            activeSection={`${
                                index === activeSection ? activeSection : null
                            }`}
                            setActiveCard={setActiveCard}
                            activeCard={`${
                                index === activeSection ? activeCard : null
                            }`}
                            setActiveSection={setActiveSection}
                            idSection={index}
                            cardRef={cardRef}
                        />
                    );
                })}
        </main>
    );
}

export default memo(Main);