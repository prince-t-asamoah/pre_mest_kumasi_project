import "../../css/w3.css";

function Inputs({type, placeholder, value, onchange}) {
    return(
        <>
            <input
                type={type}
                placeHolder={placeholder}
                value={value}
                onChange={onchange}
                className="w3-input w3-light-grey"
            />
        </>
    );
};

export default Inputs;