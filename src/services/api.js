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



export const createCampaign = (campaignData) => {
    console.log('Creating campaign with:', campaignData);
    return axios.post(`${API_BASE_URL}/create_campaign/`, JSON.stringify(campaignData), {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q',
            'Content-Type': 'application/json'
        }
    });
};

export const updateCampaign = ({ title, voice, language, script, purpose, knowledgeBase, calendar, firstLine, tone, postCallAnalysis, postCallAnalysisSchema, campId }) => {
    return api.post(`${API_BASE_URL}/update_campaign`, JSON.stringify({
        campaignModelData: {
            title,
            voice,
            language,
            script,
            purpose,
            knowledgeBase,
            calendar,
            firstLine,
            tone,
            postCallAnalysis,
            postCallAnalysisSchema
        },
        campId
    }), {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q',
            'Content-Type': 'application/json'
        }
    });
};


export const makeCallApi = async ({ name, phoneNo }) => {
    const campId = localStorage.getItem('campId');
    const response = await axios.post(`${API_BASE_URL}/make_call/`, {
        campId,
        contactName: name,
        contactPhone: phoneNo,
    }, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q',
            'Content-Type': 'application/json'
        }
    });
    return response;
};

export const getCallStatus = async (callId) => {
    const response = await axios.get(`${API_BASE_URL}/call_status`, {
        params: {
            callId
        },
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q'
        }
    });
    return response.data;
};

export const getTranscription = async (callId) => {
    const response = await axios.get(`${API_BASE_URL}/get_transcription`, {
        params: {
            callId
        },
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q'
        }
    });
    return response.data;
};

export const getPostCallAnalysis = async (callId) => {
    const response = await axios.get(`${API_BASE_URL}/get_post_call_analysis`, {
        params: {
            callId
        },
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer tg_0f6e9565-e753-4f7b-876c-252248d17e88-lEiR95Ym1byOVfcIz5-u2Q'
        }
    });
    return response.data;
};