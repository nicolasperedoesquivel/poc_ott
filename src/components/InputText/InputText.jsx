function InputText({name, value, type, className, onChange}){
    return (
        <input 
            name={name}
            value={value}
            type={type}
            className={className} 
            onChange={onChange}/>
    );
}

export default InputText;