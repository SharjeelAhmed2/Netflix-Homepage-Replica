
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <>
    
    <div className="App">
      <Nav />
    <Banner />
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries}/>
    </div>
    </>
  );
}

export default App;
