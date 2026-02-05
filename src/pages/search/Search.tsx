import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryString, setQueryString] = useState("");
    const query = searchParams.get("query");

    return (
        <div className="search-container">
            <h1>Search</h1>
            <p>Query: {query}</p>
            <input type="text" value={queryString ?? ""} onChange={(e) => setQueryString(e.target.value)} />
            <button onClick={() => setSearchParams({ query: queryString })}>Search</button>
        </div>
    )
}

export default Search;