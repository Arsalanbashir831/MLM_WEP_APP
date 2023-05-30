import { Delete, Edit } from '@mui/icons-material';
import React, { useState } from 'react';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([
        { id: 1, name: 'John Doe', address: '123 Main St', level: 'PC' },
        { id: 2, name: 'Jane Smith', address: '456 Elm St', level: 'AS' },
    ]);

    const [newMember, setNewMember] = useState({ id: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMember((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleAddMember = () => {
        setTeamMembers((prevState) => [...prevState, newMember]);
        setNewMember({ id: ''});
        setIsModalOpen(false);
    };

    const handleDeleteMember = (index) => {
        setTeamMembers((prevState) => prevState.filter((_, i) => i !== index));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="col-span-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Team</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openModal}
                >
                    Add Member
                </button>
            </div>

            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Levels</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teamMembers.map((member, index) => (
                        <tr key={index} className="border-t">
                            <td className="border px-4 py-2">{member.id}</td>
                            <td className="border px-4 py-2">{member.name}</td>
                            <td className="border px-4 py-2">{member.address}</td>
                            <td className="border px-4 py-2">{member.level}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className="bg-yellow-300 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                    onClick={() => handleEditMember(index)}
                                >
                                    <Edit></Edit>
                                </button>
                                <button
                                    className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => handleDeleteMember(index)}
                                >
                                    <Delete></Delete>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="fixed inset-0 bg-blackbg-opacity-50 flex items-center justify-center z-10">
                    <div className="bg-white rounded p-8 w-80">
                        <h2 className="text-2xl font-bold mb-4">Add Member</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
                                    ID
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    type="text"
                                    id="id"
                                    name="id"
                                    value={newMember.id}
                                    onChange={handleInputChange}
                                    required
                                />
                           </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={handleAddMember}
                                >
                                    Add
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;
