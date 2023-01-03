const getImagesFromApi = async (term) => {
    try {
        let response = await fetch('https://api.unsplash.com/search/photos/?query=' + term + '&client_id=XE_VbLJTfRRFWy6oy4TX-awxcQlqH3XrJ23R3-tB3xY');
        const renderedResponse = await response.json();
        return renderedResponse.results;
    } catch(error) {
        throw error;
    }
}

export default getImagesFromApi;