import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import logo from "./logo.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [load, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    
    let pexelsApiKey =
    "oN6RT35nU92xzrDyjneGcJLcKZCcvZq8m9WUbdskwHnarJr6dnXLM1Na";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function loaded() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <img
            src={logo}
            alt="Dictionary logo"
            className="logo img-fluid"
          />
          <h1 className="text-center dictionary-name">Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            Suggested keywords: sunset, wine, goose, pillow...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
     load();
     return "Loading...";
  }
}
