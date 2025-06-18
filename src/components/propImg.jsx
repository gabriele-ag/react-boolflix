function FlagImg({language}) {
    return (
        <img className="m-bottom-30" src={`https://flagcdn.com/16x12/${language}.png`} alt={language}></img>
    )
}

export default FlagImg