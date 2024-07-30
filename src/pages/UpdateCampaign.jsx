import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSupportedLangs, getSuppertedVoices, updateCampaign } from '../services/api';

const UpdateCampaign = () => {
    const { id } = useParams();
    const [languages, setLanguages] = useState([]);
    const [voices, setVoices] = useState([]);
    const [campaignData, setCampaignData] = useState({
        title: '',
        voice: '',
        language: '',
        script: '',
        purpose: '',
        knowledgeBase: '',
        calendar: '10Am to 10Pm IST',
        firstLine: '',
        tone: '',
        postCallAnalysis: false,
        postCallAnalysisSchema: {}
    });

    useEffect(() => {
        getSupportedLangs()
            .then(languages => setLanguages(languages))
            .catch(error => console.error('Error fetching supported languages:', error));

        getSuppertedVoices()
            .then(voices => setVoices(voices))
            .catch(error => console.error('Error fetching supported voices:', error));

        // Fetch existing campaign data by id if needed and populate form
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCampaignData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setCampaignData(prevData => ({ ...prevData, knowledgeBase: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCampaign({ ...campaignData, campId: id })
            .then(response => {
                console.log('Campaign updated:', response.data);
                // Handle successful campaign update
            })
            .catch(error => {
                console.error('Error updating campaign:', error);
                // Handle error
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-teal-400">Update Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-300 mb-2">Title:</label>
                    <input type="text" name="title" value={campaignData.title} onChange={handleChange} required
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Language:</label>
                    <select name="language" value={campaignData.language} onChange={handleChange} required
                        className="w-full bg-gray-700 text-white p-2 rounded">
                        <option value="">Select Language</option>
                        {languages.map(language => (
                            <option key={language} value={language}>{language}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Voice:</label>
                    <select name="voice" value={campaignData.voice} onChange={handleChange} required
                        className="w-full bg-gray-700 text-white p-2 rounded">
                        <option value="">Select Voice</option>
                        {voices.map(voice => (
                            <option key={voice} value={voice.name}>
                                {voice.name} {voice.type && `- ${voice.type}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Script:</label>
                    <textarea name="script" value={campaignData.script} onChange={handleChange} required
                        className="w-full bg-gray-700 text-white p-2 rounded h-32" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Purpose:</label>
                    <input type="text" name="purpose" value={campaignData.purpose} onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Knowledge Base URL:</label>
                    <input type="text" name="knowledgeBase" value={campaignData.knowledgeBase} onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Knowledge Base File:</label>
                    <input type="file" name="knowledgeBaseFile" onChange={handleFileChange}
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Calendar:</label>
                    <input type="text" name="calendar" value={campaignData.calendar} onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">First Line:</label>
                    <input type="text" name="firstLine" value={campaignData.firstLine} onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Tone:</label>
                    <input type="text" name="tone" value={campaignData.tone} onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" name="postCallAnalysis" checked={campaignData.postCallAnalysis} onChange={handleChange}
                        className="mr-2" />
                    <label className="text-gray-300">Post Call Analysis</label>
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Post Call Analysis Schema:</label>
                    <textarea name="postCallAnalysisSchema" value={campaignData.postCallAnalysisSchema} onChange={handleChange}
                        className="w-full bg-gray-700 text-white p-2 rounded h-32" />
                </div>
                <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">
                    Update Campaign
                </button>
            </form>
        </div>
    );
};

export default UpdateCampaign;