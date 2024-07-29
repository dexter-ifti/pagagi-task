import React, { useEffect, useState } from 'react'
import { getSuppertedVoices, getSupportedLangs, createCampaign } from '../services/api';

function Dashborad() {

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

    try {
      const response = await createCampaign({
        title,
        language,
        voice,
        knowledgeBase,
        script
      });

      if (response.status && response.result.campaignId) {
        setCampaignId(response.result.campaignId);
        alert(`Campaign created successfully! Campaign ID: ${response.result.campaignId}`);
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
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter name here"
          value={title}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={language} onChange={handleChange}>
          <option value="">Select a language</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>

        <select value={voice} onChange={(e) => setVoice(e.target.value)}>
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
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter script here (Min. 200 characters)"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Knowledge Base URL :</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter knowledge base URL or identifier"
          value={knowledgeBase}
          onChange={(e) => setKnowledgeBase(e.target.value)}
        />
        <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Create Campaign</button>
      </form>
    </div>
  )
}

export default Dashborad