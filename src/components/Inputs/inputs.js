
function Inputs({type, placeholder, value, onchange, classname}) {
    return(
        <>
            <input
                type={type}
                placeHolder={placeholder}
                value={value}
                onChange={onchange}
                className={classname}                    
            />
        </>
    );
};

export default Inputs;