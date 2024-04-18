import ImageShow from "./ImageShow";
import "./ImageList.css"
import Cards from "./Cards";

function ImageList({images}) {
const renderedImages = images.map((image) =>{
    return <ImageShow key={image.id} image = {image} />;
});

    return <div className="image-list">
        {renderedImages}
    </div>
}

export default ImageList;