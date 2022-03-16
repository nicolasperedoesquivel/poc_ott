function ImageContainer({imgSrc, className, altName}){
    return (
        <>
        <img src={imgSrc} className={className} alt={altName}></img>
        </>
    );
}

export default ImageContainer;