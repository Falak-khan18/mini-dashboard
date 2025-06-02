import React from 'react';

const UserTable = ({ users, onViewUser }) => (
    <table className="w-full border-collapse border border-gray-300">
        <thead>
            <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Company</th>
                <th className="border p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td className="border p-2">{user.name}</td>
                    <td className="border p-2">{user.email}</td>
                    <td className="border p-2">{user.company.name}</td>
                    <td className="border p-2">
                        <button
                            className="text-blue-500 underline"
                            onClick={() => onViewUser(user)}
                        >
                            View Details
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default React.memo(UserTable);
