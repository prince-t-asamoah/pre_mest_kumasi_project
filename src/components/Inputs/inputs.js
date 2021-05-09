
function Inputs({ style, type, placeholder, name, value, onchange, classname}) {
    return(
        <div style={style}>
            <input
                type={type}
                placeHolder={placeholder}
                name={name}
                value={value}
                className={classname}
                onChange={onchange}
                required                  
            />
        </div>
    );
};

export default Inputs;