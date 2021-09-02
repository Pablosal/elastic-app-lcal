import { useEffect, useState } from 'react';
import './App.css';
var axios = require('axios');

function App() {
  const [query, setQuery] = useState('');
  const [matches, setMatches] = useState(null);
  const getSuggestions = () => {
    if (query === '') return;
    var config = {
      method: 'get',
      url: `http://localhost:9200/productos/_search?q=${query}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        const arr = response.data.hits.hits;
        setMatches(arr);
        console.log(response);
        console.log({ arr });
        // setMatches(myRes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    getSuggestions(query);
  }, [query]);
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type="text" value={query} onChange={onChange} />
        </form>

        <div>
          <h1>Productos Encontrados</h1>
          <ul>
            {matches &&
              matches.map((item, idx) => (
                <li key={idx}>{item._source.nombre}</li>
              ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
