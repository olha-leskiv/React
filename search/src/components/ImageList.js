import Image from './Image';

function ImageList({images}) {
    const renderedImages = images.map((image, index) => {
        return <Image src={image.urls.small} key={index} />
    })

    return (
        <div>{renderedImages}</div>
    )
}

export default ImageList;