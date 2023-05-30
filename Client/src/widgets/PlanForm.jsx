import React, { useState } from 'react';
import { setJoin } from '../global';

const PlanForm = () => {
    const [formData, setFormData] = useState({
        joinAs: '',
        teamName: '',
        teamDescription: '',
        companyName: '',
        companyURL: '',
        companyDescription: '',
        companyAddress:''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleJoinAsChange = (event) => {
        const joinAs = event.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            joinAs: joinAs,
        }));
        setJoin(joinAs);
    };

    const { joinAs, teamName, teamDescription, companyName, companyURL, companyDescription,companyAddress } = formData;

    return (
        <div className="bg-white shadow-md rounded px-8 py-6 max-w-md mx-auto">
            <h2 className="text-center text-2xl font-bold mb-6">Join Form</h2>
            <div className="mb-4">
                <p className="text-gray-700 font-bold mb-2">Join as:</p>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="joinAs"
                        value="team"
                        checked={joinAs === 'team'}
                        onChange={handleJoinAsChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Team</span>
                </label>
                <label className="inline-flex items-center ml-6">
                    <input
                        type="radio"
                        name="joinAs"
                        value="company"
                        checked={joinAs === 'company'}
                        onChange={handleJoinAsChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Company</span>
                </label>
            </div>
            {joinAs === 'team' && (
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="teamName">
                        Team Name
                    </label>
                    <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={teamName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter team Name"
                    />
                    <div className="flex items-center justify-start flex-col my-2">
                        <label className="block text-gray-700 font-bold mb-2 w-full" htmlFor="teamDescription">
                            Team Description
                        </label>
                        <textarea
                           className="border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
                            name="teamDescription"
                            rows={6} cols={45}
                            value={teamDescription}
                            onChange={handleInputChange}
                            placeholder="Enter team description"
                        />
                    </div>
                </div>
            )}
            {joinAs === 'company' && (
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="CompanyDetails">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter company Name"
                    />
                    <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="companyDetails">
                        Company URL
                    </label>
                    <input
                        type="text"
                        id="companyurl"
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={companyURL}
                        placeholder="Enter company url"
                    />
                     <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="companyDetails">
                        Company Address
                    </label>
                    <input
                        type="text"
                        id="companyAddress"
                        onChange={handleInputChange}
                        value={companyAddress}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter company Address"
                    />

                    <label className="block text-gray-700 font-bold mb-2 w-full my-2" htmlFor="CompanyDetails">
                        Company Description
                    </label>
                        <textarea
                        onChange={handleInputChange}
                        value={companyDescription}
                            className="border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
                            rows={6} cols={45}
                            placeholder="Enter your text"
                        />
                    </div>
                    
            
            )}

        </div>
    );
};

export default PlanForm;
