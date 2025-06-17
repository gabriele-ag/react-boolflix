function FlagImg({language}) {
    return (
        <>
            <p>Lingua</p>
            <img src={`https://flagcdn.com/20x15/${language}.png`} alt={language} />
        </>
    )
}

export default FlagImg