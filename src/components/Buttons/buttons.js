
function Buttons({text, onclick}) {
    return(
        <>
            <button 
                onClick={onclick}
                > {text}
            </button>
        </>
    );
};

export default Buttons;