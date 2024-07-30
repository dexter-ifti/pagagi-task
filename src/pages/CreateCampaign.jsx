


import React, { useEffect, useState } from 'react'
import { getSuppertedVoices, getSupportedLangs, createCampaign } from '../services/api';

const CreateCampaign = () => {

    const [languages, setLanguages] = useState([])
    const [voices, setVoices] = useState([]);
    const [language, setLanguage] = useState(languages[0] || 'english-in');
    const [voice, setVoice] = useState(voices[0] || 'echo');
    const [title, setName] = useState('');
    const [knowledgeBase, setKnowledgeBase] = useState('');
    const [script, setScript] = useState('');
    const [campaignId, setCampaignId] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation()
        setError(null);
        setCampaignId(null);

        if (script.length < 200) {
            setError('Script must be at least 200 characters long');
            return;
        }

        const campaignData = {
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
        };

        try {
            console.log('Submitting campaign data:', campaignData);
            const response = await createCampaign(campaignData);
            console.log('API response:', response);

            if (response.data && response.data.result && response.data.result.campaignId) {
                setCampaignId(response.data.result.campaignId);
                localStorage.setItem('campID', response.data.result.campaignId);
                alert(`Campaign created successfully! Campaign ID: ${response.data.result.campaignId}`);
            } else {
                setError('Campaign created, but no ID was returned. Please check your dashboard.');
            }
        } catch (error) {
            console.error('Error creating campaign:', error);
            setError(error.response?.data?.message || 'Failed to create campaign. Please try again.');
        }
    };

    useEffect(() => {
        getSupportedLangs().then(data => setLanguages(data));
        getSuppertedVoices().then(data => setVoices(data));
    }, [])

    // console.log(languages);
    // console.log(voices);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name here"
                    value={title}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded"
                />
                <select value={language} onChange={handleChange}
                    className="block w-full mt-1 rounded-md border border-gray-300 bg-teal-600  py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="">Select a language</option>
                    {languages.map((language, index) => (
                        <option key={index} value={language}>
                            {language}
                        </option>
                    ))}
                </select>

                <select value={voice} onChange={(e) => setVoice(e.target.value)}
                    className="block w-full mt-1 rounded-md border border-gray-300 bg-teal-600  py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                    >
                    <option value="">Select a voice</option>
                    {voices.map((voice, index) => (
                        <option key={index} value={voice.name}>
                            {voice.name} {voice.type && `- ${voice.type}`}
                        </option>
                    ))}
                </select>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Script</label>
                <input
                    type="text"
                    placeholder="Enter script here (Min. 200 characters)"
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded"
                />
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Knowledge Base URL :</label>
                <input
                    type="text"
                    placeholder="Enter knowledge base URL or identifier"
                    value={knowledgeBase}
                    onChange={(e) => setKnowledgeBase(e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded"
                />
                <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Create Campaign</button>
            </form>
        </div>
    )
}

export default CreateCampaign