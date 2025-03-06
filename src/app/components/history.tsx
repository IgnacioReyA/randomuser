import React from 'react';

interface User {
  name: string;
}

interface HistoryProps {
  users: User[];
  onSelectUser: (index: number) => void;
}

export default function History({ users, onSelectUser }: HistoryProps) {
  return (
    <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">User History</h2>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => onSelectUser(index)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}