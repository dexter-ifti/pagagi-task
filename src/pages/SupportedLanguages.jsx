import React from 'react'

const SupportedLanguages = () => {
    const languages = [
        "english", "english-au", "english-in", "english-us", "french", "german",
        "hindi", "portuguese", "russian", "spanish", "swedish"
    ]
    return (
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal-400">Supported Languages</h2>
            <ul className="grid grid-cols-2 gap-4">
                {languages.map((language, index) => (
                    <li
                        key={index}
                        className="bg-gray-700 text-white p-3 rounded-lg flex items-center justify-center hover:bg-gray-600 transition duration-300 ease-in-out"
                    >
                        <span className="capitalize">{language}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default SupportedLanguages