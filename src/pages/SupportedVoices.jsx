import React from 'react'

const VoiceCard = ({ name, type }) => (
    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition duration-300 ease-in-out">
        <h3 className="text-lg font-semibold text-teal-400 mb-2">{name}</h3>
        {type && <p className="text-gray-300 text-sm">{type}</p>}
    </div>
);

const SupportedVoices = () => {
    const voices = [
        {
            "name": "robot",
            "type": ""
        },
        {
            "name": "jenny",
            "type": "Female with us accent"
        },
        {
            "name": "junior",
            "type": "Male with south african"
        },
        {
            "name": "nabarupa",
            "type": "Female with indian accent"
        },
        {
            "name": "alloy",
            "type": ""
        },
        {
            "name": "echo",
            "type": ""
        },
        {
            "name": "fable",
            "type": ""
        },
        {
            "name": "onyx",
            "type": ""
        },
        {
            "name": "nova",
            "type": ""
        },
        {
            "name": "shimmer",
            "type": ""
        },
        {
            "name": "jessica",
            "type": "Female with UK accent"
        },
        {
            "name": "anna",
            "type": "Female with American accent"
        },
        {
            "name": "lisa",
            "type": "Female with American accent"
        },
        {
            "name": "johwaan",
            "type": "Male with American accent"
        },
        {
            "name": "david",
            "type": "Male with Standard accent"
        },
        {
            "name": "monika",
            "type": "Female with Indian English accent"
        },
        {
            "name": "swara",
            "type": "Female with Indian English accent"
        },
        {
            "name": "varun",
            "type": "Male with Indian English accent"
        },
        {
            "name": "amrit",
            "type": "Male with Indian English accent"
        },
        {
            "name": "amari",
            "type": "Female with south african accent"
        },
        {
            "name": "louis",
            "type": "Male with french accent"
        },
        {
            "name": "charlotte",
            "type": "Female with french accent"
        },
        {
            "name": "alexandre",
            "type": "Male with french accent"
        },
        {
            "name": "priya_hindi",
            "type": ""
        },
        {
            "name": "alisha_hindi",
            "type": ""
        },
        {
            "name": "bobby",
            "type": ""
        }
    ]
    return (
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-teal-400">Available Voices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {voices.map((voice, index) => (
                    <VoiceCard key={index} name={voice.name} type={voice.type} />
                ))}
            </div>
        </div>
    );
};

export default SupportedVoices