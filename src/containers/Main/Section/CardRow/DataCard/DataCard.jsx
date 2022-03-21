import { useEffect } from "react";

function DataCard({
    data,
    className,
    setActiveCard,
    setActiveSection,
    idSection,
    idCard,
    cardRef,
}) {
    /* useEffect(() => {
        const element = document.querySelector(".card.active");
        console.log(element);
        element.scrollIntoView({behavior: "smooth"});
    }, []) */

    let onClickHandler = (e) => {
        setActiveCard(idCard);
        setActiveSection(idSection);
    };
    return (
        <>
            <div
                className={`card ${className}`}
                onClick={onClickHandler}
                ref={(ref) => {
                    cardRef.current[idSection] = { ...cardRef.current[idSection], [idCard]: ref };
                }}
            ></div>
        </>
    );
}

export default DataCard;