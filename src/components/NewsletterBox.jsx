import React, { useState } from 'react';

const NewsletterBox = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!email) {
            setError('Please fill out this field'); // Error message
        } else {
            setError(''); // Clear the error
            // Handle successful submission (e.g., send email)
            console.log("Email submitted:", email);
            // Optionally reset the email input
            setEmail('');
        }
    };

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 15% off</p>
            <p className='text-gray-400 mt-3'>
                Subscribe now and enjoy 15% off your first order! Get ready to elevate your wardrobe with the latest styles and exclusive deals!
            </p>
            <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row items-center bg-gray-100 p-1 rounded-lg shadow-md">
                <input 
                    className={`w-full sm:w-[300px] p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`} 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required 
                />
                <button 
                    type="submit" 
                    className="mt-2 sm:mt-0 sm:ml-2 w-[100px] bg-gray-900 text-white text-xs px-2 py-2 rounded-md hover:bg-blue-600 transition duration-100"
                >
                    SUBSCRIBE
                </button>
            </form>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>} {/* Display error message */}
        </div>
    );
}

export default NewsletterBox;
