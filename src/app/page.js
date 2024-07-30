"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreeting = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/greet`, { name });
    setGreeting(response.data.greeting);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Greeting App (type your name and press the button)</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full text-black"
        placeholder="Enter your name"
      />
      <button
        onClick={handleGreeting}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Greeting
      </button>
      {greeting && <p className="mt-4 text-xl">{greeting}</p>}
    </div>
  );
}
