
function Inputs({type, placeholder, value, onchange, classname, style, name}) {
    return(
        <div style={style}>
            <input
                type={type}
                placeHolder={placeholder}
                value={value}
                onChange={onchange}
                className={classname}
                name={name}
                required                  
            />
        </div>
    );
};

export default Inputs;