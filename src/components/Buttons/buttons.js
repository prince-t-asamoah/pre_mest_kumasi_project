
function Buttons({text, onclick}) {
    return(
        <>
            <button 
                onClick={onclick}
                className="w3-btn w3-large w3-blue"> {text}
            </button>
        </>
    );
};

export default Buttons;