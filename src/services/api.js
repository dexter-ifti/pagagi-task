import axios from "axios";

const API_BASE_URL = 'https://www.toingg.com/api/v3';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': "application/json",
        'Authorization': "Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q"
    }
});


export const getSupportedLangs = () => api.get('/get_supported_languages')
    .then(response => {
        if (response.status === 200) {
            // console.log(response.data.result.languages);
            return response.data.result.languages;
        } else {
            console.log('Error');
        }
    })
    .catch(error => {
        console.log(error);
    });

export const getSuppertedVoices = () => api.get('/get_supported_voices')
    .then(response => {
        if (response.status === 200) {
            // console.log(response.data.result.voices);
            return response.data.result.voice;
        } else {
            console.log('Error');
        }
    })
    .catch(error => {
        console.log(error);
    });


    const payload = {
        title,
        voice,
        language,
        script,
        purpose: '',
        knowledgeBase,
        calendar: '10Am to 10Pm IST',
        firstLine: '',
        tone: '',
        postCallAnalysis: false,
        postCallAnalysisSchema: {}
    }

export const createCampaign = ({ title, voice, language, script, knowledgeBase }) => {
    console.log(title, voice, language, script, knowledgeBase);
    return  axios.post(`${API_BASE_URL}/create_campaign/`, JSON.stringify(payload), {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q',
            'Content-Type': 'application/json'
        }
    });
};