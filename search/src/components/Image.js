import '../css/Image.css'

function Image({ image }) {
    return (
        <img src={image.urls.small} alt={image.alt_description}/>
    )
}

export default Image;