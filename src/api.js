import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bqTAJebAJ8LqMWXJS23vfa8U_GD1Hofy_lWhZ_H-SG4'
        },

        params : {
            query: term,
        }
    });
    
    return response.data.results;
}

export default searchImages;
