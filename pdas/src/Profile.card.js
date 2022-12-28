function ProfileCard({ name, src, text, alt, handle }) {

    return (

        <div className="card">
            <div className="card-image">
                <figure className="image is-4by4">
                    <img src={src} alt={alt} />
                </figure>
            </div>

            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                </div>

                <div className="content">
                {text}
                </div>
            </div>
        </div>

    );
}

export default ProfileCard;