import React, { useEffect, useState } from 'react'
import { DropDown } from '../components';
import { getSuppertedVoices, getSupportedLangs, createCampaign } from '../services/api';

function Dashborad() {

  const [languages, setLanguages] = useState([])
  const [voices, setVoices] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0] || 'english-in');
  const [selectedVoice, setSelectedVoice] = useState(voices[0] || 'echo');
  const [title, setName] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const [script, setScript] = useState('');
  const [campaignId, setCampaignId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setCampaignId(null);

    if (script.length < 200) {
      setError('Script must be at least 200 characters long');
      return;
    }

    try {
      const response = await createCampaign({
        title,
        language: selectedLanguage,
        voice: selectedVoice,
        knowledgeBase,
        script
      });

      if (response.data && response.data.id) {
        setCampaignId(response.data.id);
        alert(`Campaign created successfully! Campaign ID: ${response.data.id}`);
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
        {/* <DropDown></DropDown> */}
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter name here"
          value={title}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={selectedLanguage} onChange={handleChange}>
          <option value="">Select a language</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>

        <select value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)}>
          <option value="">Select a voice</option>
          {voices.map((voice, index) => (
            <option key={index} value={voice.name}>
              {voice.name} {voice.type && `- ${voice.type}`}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter script here (Min. 200 characters)"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter knowledge base URL or identifier"
          value={knowledgeBase}
          onChange={(e) => setKnowledgeBase(e.target.value)}
        />
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Create Campaign</button>
      </form>
    </div>
  )
}

export default Dashborad