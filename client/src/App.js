import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

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
            const regex = /\/reel\/([^\?\/]+)/;
            const match = url.match(regex);

            // Check if there's a match and extract the code
            const reelCode = match ? match[1] : null;
            console.log("http://localhost:3001/scrape", { reelCode })
            setLoading(true);
            const response = await axios.post('http://localhost:3001/scrape', { reelCode });
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
        <div className='page'>
            <div>
                <h1 className='title'>Instagram Reel Downloader</h1>

                <div class="search-bar">
                    <input type="search" name="search"
                        placeholder="Enter Instagram reel Link"
                        value={url}
                        onChange={handleUrlChange} required />
                    <button class="search-btn" type="submit" onClick={fetchData} disabled={loading}>
                        <span>Scrape Data</span>
                    </button>
                </div>

                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {result && <div><button onClick={handleRedirect} className='Btn-download'>Download</button></div>}
            </div>
        </div>
    );
}

export default App;
