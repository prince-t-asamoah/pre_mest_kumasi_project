import "../../css/w3.css";

function Buttons({text}) {
    return(
        <>
            <button className="w3-btn w3-blue">
                {text}
            </button>
        </>
    );
};

export default Buttons;