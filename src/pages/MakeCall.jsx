import React, { useState } from 'react';
import { makeCallApi } from '../services/api'; // Adjust the import path as needed

function MakeCall() {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await makeCallApi({ name, phoneNo });
            console.log('Call made:', response.data.status);
            console.log('Call result:', response.data.result);
            // Handle successful call
        } catch (error) {
            console.error('Error making call:', error);
            // Handle error
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <div>
                <input
                    type="text"
                    className="bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter name here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    className="bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter phone number here"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
                Make Call
            </button>
        </form>
    );
}

export default MakeCall;
