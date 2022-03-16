function Button({className, onClickEvent, childrenComponent}){
    return (
        <button 
            className={className} 
            onClick={onClickEvent}
        >
            {childrenComponent}
        </button>
    );
}

export default Button;