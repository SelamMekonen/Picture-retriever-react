import "bulma/css/bulma.css"
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from './components/ImageList';
import NavbarComponent from "./components/NavbarComponent";
import TabComponent from "./components/TabComponent";


function App() {



    const [images, setImages] = useState([])

    const handleSubmit = async(term) => {
    const result = await searchImages(term)
    
    setImages(result)

    }

    return <div>
        <NavbarComponent />
        <TabComponent />
        <SearchBar onSubmit = {handleSubmit} />
        <ImageList images = {images}/>
    </div>
}

export default App;