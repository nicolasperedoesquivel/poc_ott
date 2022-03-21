import { useCallback, useState, useEffect, useMemo } from "react";
import DataCard from "./DataCard/DataCard";

function CardRow({dataToDisplay}){
    const title = Object.keys(dataToDisplay)[0];    
    const values = useMemo(() => Object.values(dataToDisplay)[0], [dataToDisplay])

    return (
        <section className={`section-container ${title}`}>
            <div className="section-container__title">
                {title.toUpperCase()}
            </div>
            <div className={`section-container__cards ${title}`}>
                {values.map((singleData, index) => {
                    return <DataCard
                        /*className={index === activeCard ? 'active' : ''}*/
                        key={`${title}-${index}`}
                        data={singleData}                
                    />
                })}
            </div>
        </section>
    );
}

export default CardRow;