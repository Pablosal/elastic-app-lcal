import {
  DataSearch,
  ReactiveBase,
  ReactiveList,
} from '@appbaseio/reactivesearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Productos</h1>
        <ReactiveBase
          url="https://products-rhpmaap-arc.searchbase.io"
          app="productos"
          credentials="1e5b831982ad:9a600159-dff6-4ba0-a60b-f4da8b6119d6"
          enableAppbase
        >
          <DataSearch
            componentId="searchbox"
            highlight={true}
            size={10}
            dataField={['nombre']}
            placeholder="Search for books or authors"
          />
          <ReactiveList
            componentId="SearchResult"
            dataField="image"
            react={{
              and: ['CitySensor', 'SearchSensor'],
            }}
            renderItem={(res) => {
              console.log(res);
              return (
                <div key={res._id}>
                  <h2>{res.nombre}</h2>
                  <img height="200" src={res.image} alt="" />
                </div>
              );
            }}
          />
        </ReactiveBase>
      </header>
    </div>
  );
}

export default App;
