function SearchContent({search, input, click}) {

    return (
    
    <div className="flex input-div">
        <label>Cerca</label>
        <input
        type=""
        value={search}
        onChange={input}
        aria-label= "Cerca film o serie tv"
        placeholder="Scrivi qui il tuo film o serie tv..."
                    ></input>
        <button className="" type="submit" onClick={click}>Cerca</button>
    </div>
    )
}
export default SearchContent