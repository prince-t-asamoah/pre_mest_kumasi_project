
function Inputs({type, placeholder, value, onchange}) {
    return(
        <>
            <input
                type={type}
                placeHolder={placeholder}
                value={value}
                onChange={onchange}
                className="w3-input"
            />
        </>
    );
};

export default Inputs;