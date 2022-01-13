
import './App.css';
import {useState} from 'react';
import 'bulma/css/bulma.min.css';
import DisplayURL from './components/displayURL';


function App() {


  const [url, setUrl] = useState('');
  const [newUrl,setNewUrl] = useState('');





  const handleSubmit = ()=>{
    fetch('https://url-shortner26.herokuapp.com/create',
     {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           url
       })
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setNewUrl(data.newURL);
        setUrl('');
      })
  }

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            URL Shortener
          </p>
          <p class="subtitle">
            Made with the MERN Stack
          </p>
        </div>
      </section>
      <div class="columns is-centered mb-6">
        <div className="box column is-three-fifths is-centered">
          <input class="input is-link mb-4" type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder="url"></input>
          <button class="button is-dark"onClick={handleSubmit}>Submit</button>
          <br></br>
          
          
        </div>

      </div>
      <div class="columns is-centered">
      <div className="box column is-three-fifths is-centered">
        <DisplayURL newURL={newUrl}></DisplayURL>
      </div>
      </div>
    </div>
  );
}

export default App;
