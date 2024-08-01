import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);  // State to manage loading
  const [insights, setInsights] = useState({});  // State to store insights

  const handleFetch = async () => {
    setLoading(true);  // Start loading
    try {
      // Call userData with the username to get user data
      const userDataResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/userData`, { username: name });
      const userData = userDataResponse.data;

      // Call getInsights with the user data and search query
      const insightsResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/getInsights`, { user_data: userData, query: searchQuery });
      const insightsData = insightsResponse.data;

      // Set the insights data to state
      setInsights(insightsData);
    } catch (error) {
      console.error("Error fetching insights:", error);
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header/>
      <h1 className="text-2xl font-bold mb-4">Unnamed App (type your Instagram username and press the button to get similar profiles data)</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full text-black" 
        placeholder="Enter your Instagram username"
      />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 mb-4 w-full text-black" 
        placeholder="Enter your search query"
      />
      <Button onClick={handleFetch}>
        {loading ? "Fetching..." : "Fetch"}  {/* Display loading text */}
      </Button>

      {/* Display insights */}
      {Object.keys(insights).length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Insights:</h2>
          {Object.entries(insights).map(([profileUrl, posts]) => (
            <div key={profileUrl} className="mt-4">
              <h3 className="text-lg font-bold">{profileUrl}</h3>
              {Object.entries(posts).map(([postUrl, insight]) => (
                <div key={postUrl} className="mt-2">
                  <a href={postUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {postUrl}
                  </a>
                  <p>{insight}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
