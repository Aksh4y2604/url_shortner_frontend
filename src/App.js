
import './App.css';
import {useState} from 'react';
import 'bulma/css/bulma.min.css';
import DisplayURL from './components/displayURL';


function App() {


  const [url, setUrl] = useState('');
  const [custom, setCustom] = useState('');
  const [newUrl,setNewUrl] = useState('');

  const handleSubmit = ()=>{
    fetch('https://url-shortner-backend-flax.vercel.app/create',{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           url,
           custom
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
      <section className="hero">
        <div className="hero-body">
          <p className="title">
            URL Shortener
          </p>

        </div>
      </section>
      <div className="columns is-centered mb-6">
        <div className="box column is-three-fifths is-centered">
          <input className="input is-link mb-4" type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder="Enter the url (including https://)"></input>
          <input className="input is-link mb-4" type="text" value={custom} onChange={(e)=>{setCustom(e.target.value)}} placeholder="Enter a preferred custom name"></input>
          <button className="button is-dark"onClick={handleSubmit}>Submit</button>
          <br></br>
          
          
        </div>

      </div>
      <div className="columns is-centered">
      <div className="box column is-three-fifths is-centered">
        <DisplayURL newURL={newUrl}></DisplayURL>
      </div>
      </div>
    </div>
  );
}

export default App;
