import { useState, useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [state] = useState(
    [
      { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
      { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
      { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" }
    ])
  const [songsActive, setsongsActive] = useState(null); 
  let nombreRef = useRef(null); 
  

  const setSingleSong = (x, i) => {
    nombreRef.src = `https://assets.breatheco.de/apis/sound/${x}`;
    setsongsActive(i) 
  }
  const playsong = () => {
    if (nombreRef !== null)
    nombreRef.play();
  }
  const pause = () => {
    nombreRef.pause();
  }
  const nextSong = () => {
    let position= songsActive !== null ? songsActive === state.length - 1 ? 0 : songsActive + 1 : 0;
    setSingleSong(state[position].url, position)
  }
  const rewindSong = () => {
    let position= songsActive !== null ? songsActive === 0 ? state.length -1 : songsActive -1 : 0; 
    setSingleSong(state[position].url, position);
    playsong();

  }

  return (

     <div className="container mt-4 py-5" >
      <div className="row">
        <div className="col-md-6 mx-auto p-auto text-align">
          <div className="list-group text-align">
            {
              state.length > 0 && state.map((value, j) => {
                return <button key={value.id} id="list-btn" className={"btn btn-lg text-left bg-dark shadow-1-strong" + (songsActive === j)} onClick={() => setSingleSong(value.url, j)} >{value.name} </button>  
              })
            }
          </div>
                <div className="col-mt-4 bg-dark mx-auto text-center list-group-item list-group-item-action">
              <audio className="audioControl" ref={r => nombreRef = r} autoPlay controls/>
              <button className="btn-sm bg-dark" onClick={rewindSong}><i className="fas fa-step-backward"></i></button>
              <button className="btn-sm bg-dark" onClick={pause}><i className="fas fa-pause"></i></button>
              <button className="btn-sm bg-dark" onClick={playsong}><i className="fas fa-play"></i></button>
              <button className="btn-sm bg-dark" onClick={nextSong}><i className="fas fa-step-forward"></i></button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
