function Section({dataToDisplay}){
    return (
        <section className={`section-container-${Object.keys(dataToDisplay)[0]}`}>
            This is a section
        </section>
    );
}

export default Section;