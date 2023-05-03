const Search = ({Keyword,handleKeywordChange}) => {
    return (
        <div>
            <div>
                Keyword
                <input type="text" value={Keyword} onChange={handleKeywordChange} />
            </div>
        </div>
    );
}

export default Search;