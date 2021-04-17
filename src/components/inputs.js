function Inputs({type, placeholder, value, styleName}) {
    return(
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                className={styleName}
            />
        </>
    )
}

export default Inputs