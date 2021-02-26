import React from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './Request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row
      isLargeRow = {true}
      title = "NETFLIX ORIGINALS"
      fetchUrl = {requests.fetchNetflixOriginals}
      />
      <Row
      title="Trending Now"
      fetchUrl = {requests.fetchTrending}
      />
      <Row
      title="Top Rated"
      fetchUrl = {requests.fetchTopRated}
      />
      <Row
      title="Action Movies"
      fetchUrl = {requests.fetchActionMovies}
      />
      <Row
      title="Horror Movies"
      fetchUrl = {requests.fetchHorrorMovies}
      />
      <Row
      title="Comedy Movies"
      fetchUrl = {requests.fetchComedyMovies}
      />
      <Row
      title="Romance Movies"
      fetchUrl = {requests.fetchRomanticMovies}
      />
      <Row
      title="Documentaries"
      fetchUrl = {requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
