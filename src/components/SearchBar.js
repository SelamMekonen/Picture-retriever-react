import "./SearchBar.css"
import { useState } from "react";

function SearchBar({onSubmit}) {
    
    const [term, setTerm] = useState('')
    const handleClick = (event) => {
        event.preventDefault();
        
        onSubmit(term);
    };
    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return <div className="search-bar">
        <form onSubmit={handleClick}>
            <label>Enter Search Term</label>
            <input type="text" placeholder="Search..." value={term} onChange={handleChange} />
        </form>
      
    </div>
}

export default SearchBar;