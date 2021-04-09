import { useState, useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import PlayList from './Components/PlayList'

function App() {

  const [state] = useState( PlayList )

  const [songsActive, setsongsActive] = useState(null); 
  let nameRef = useRef(null); 
  
  const setSingleSong = (linkName, i) => {
    nameRef.src = `https://assets.breatheco.de/apis/sound/${linkName}`;
    setsongsActive(i) 
  }
  const playsong = () => {
    if (nameRef !== null)
    nameRef.play();
  }
  const pause = () => {
    nameRef.pause();
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
        <div className="col-md-6 mx-auto  text-align">
          <div className="list-group text-align">
            {
              state.length > 0 && state.map((value, indexList) => {
                return <button key={value.id} id="list-btn" className={"btn btn-lg text-left bg-dark shadow-1-strong" + (songsActive === indexList)} onClick={() => setSingleSong(value.url, indexList)} >{value.name} </button>  
              })
            }
          </div>
                <div className="col-mt-4 bg-dark mx-auto text-center list-group-item list-group-item-action">
              <audio className="audioControl" ref={r => nameRef = r} autoPlay controls/>
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
