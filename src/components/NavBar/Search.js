import { useState } from "react";


const Search = ({onSearchChange}) => {

    const manageSearch = ({target}) => {
        const s = target.value.trim()
        setSearch(s);
        if (s.length > 2) {
            onSearchChange(s)
        }
    }

    const [search, setSearch] = useState('');

    return(
        <form className="d-flex">
            <input type="text" name="search" onChange={manageSearch}
            value={search} placeholder="Search"/>
        </form>
    );
}
export default Search;