function FlagImg({language}) {
    return (
        <img className="m-bottom-30" src={`https://flagcdn.com/20x15/${language}.png`} alt={language}></img>
    )
}

export default FlagImg