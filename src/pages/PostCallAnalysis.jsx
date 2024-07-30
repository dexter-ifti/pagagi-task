import React, { useState } from 'react';
import { getPostCallAnalysis } from '../services/api'; 
const PostCallAnalysis = () => {
    const [callId, setCallId] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setAnalysis(null);

        try {
            const data = await getPostCallAnalysis(callId);
            setAnalysis(data);
        } catch (error) {
            setError('Error fetching post-call analysis');
            console.error('Error fetching post-call analysis:', error);
        }
    };

    return (
        <div>
            <h2>Get Post Call Analysis</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter Call ID"
                    defaultValue={'CAd1639d5322fc58b6f5b7bdb64f46279d'}
                    value={callId}
                    onChange={(e) => setCallId(e.target.value)}
                    required
                />
                <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
>Fetch Post Call Analysis</button>
            </form>

            {error && <div className="text-red-500 mt-4">{error}</div>}

            {analysis && (
                <div className="mt-4">
                    <h3>Post Call Analysis</h3>
                    <pre>{JSON.stringify(analysis, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PostCallAnalysis;
