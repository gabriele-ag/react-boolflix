function FlagImg({language}) {
    return (
        <img src={`https://flagcdn.com/16x12/${language}.png`} alt={language}></img>
    )
}

export default FlagImg