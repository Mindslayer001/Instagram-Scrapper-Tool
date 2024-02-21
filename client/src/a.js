import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setResult('');
    setError('');
  };

  const fetchData = async () => {
    try {
      console.log("http://localhost:3001/scrape", { url })
      setLoading(true);
      const response = await axios.post('http://localhost:3001/scrape', { url });
      setResult(response.data.videoData.src); // Updated line
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

    const handleRedirect = () => {
      // Change the URL to the desired website
      window.open(result, '_blank');
    };



  return (
    <div>
     <h1>Web Scraper App</h1>
      <input
      className='in-search'
        type="text"
        placeholder="Enter URL to scrape"
        value={url}
        onChange={handleUrlChange}
      />
      <button onClick={fetchData} disabled={loading} className='Btn-search'>
        Scrape Data
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {result && <div><button onClick={handleRedirect} className='Btn-download'>Download</button></div>}
    </div>
  );
}

export default App;
