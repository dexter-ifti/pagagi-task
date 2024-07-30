import React, { useState } from 'react';
import { getCallStatus } from '../services/api'; // Adjust the import path as needed

const CallStatus = () => {
    const [callId, setCallId] = useState('CAd1639d5322fc58b6f5b7bdb64f46279d');
    const [callStatus, setCallStatus] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setCallStatus(null);

        try {
            const data = await getCallStatus(callId);
            setCallStatus(data);
        } catch (error) {
            setError('Error fetching call status');
            console.error('Error fetching call status:', error);
        }
    };

    return (
        <div>
            <h2>Get Call Status</h2>
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
                <button type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"

                >Fetch Call Status</button>
            </form>

            {error && <div className="text-red-500 mt-4">{error}</div>}

            {callStatus && (
                <div className="mt-4">
                    <h3>Call Status</h3>
                    <pre>{JSON.stringify(callStatus, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default CallStatus;
