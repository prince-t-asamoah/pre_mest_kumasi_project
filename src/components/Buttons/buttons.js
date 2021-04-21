
function Buttons({text, onclick}) {
    return(
        <>
            <button 
                onClick={onclick}
                className="w3-button w3-border w3-round-xxlarge"> {text}
            </button>
        </>
    );
};

export default Buttons;