import "../../css/w3.css";

function Buttons({text, onclick}) {
    return(
        <>
            <button 
                onClick={onclick}
                className="w3-btn w3-large w3-block"> {text}
            </button>
        </>
    );
};

export default Buttons;