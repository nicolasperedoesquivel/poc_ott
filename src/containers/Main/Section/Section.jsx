import { useCallback, useState, useEffect, useMemo } from "react";
import DataCard from "./CardRow/DataCard/DataCard";

function Section({
    dataToDisplay,
    className,
    activeCard,
    setActiveCard,
    setActiveSection,
    idSection,
    cardRef
}) {
    const title = Object.keys(dataToDisplay)[0];
    const values = useMemo(
        () => Object.values(dataToDisplay)[0],
        [dataToDisplay]
    );


    return (
        <section className={`section-container ${title} ${className}`}>
            <div className="section-container__title">
                {title.toUpperCase()}
            </div>
            <div className={`section-container__cards ${title}`}>
                {values.map((singleData, index) => {
                    return (
                        <DataCard
                            className={
                                activeCard !== null &&
                                index === Number(activeCard)
                                    ? "active"
                                    : ""
                            }
                            key={`${title}-${index}`}
                            data={singleData}
                            setActiveCard={setActiveCard}
                            setActiveSection={setActiveSection}
                            idSection={idSection}
                            idCard={index}
                            cardRef={cardRef}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Section;
