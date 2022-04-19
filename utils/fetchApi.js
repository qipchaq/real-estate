import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    // should be removed try and catch
    try {
        // url should be inside brackets
        const { data } = await axios.get(url, {
            headers: {
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': '841a7bdab4msh04ef901b3c2f24ap1ac3ddjsnb78ab055c6f9'
            }
        })
        return data
    } 
    catch (error) {
        console.log(error)
    }
}