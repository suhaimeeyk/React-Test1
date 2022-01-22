import './App.css';

import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import tattoos from './data/tattoos';
// import TattooPost from './components/TattooPost';

function App() {

    const tattooElements = tattoos.map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} />;
    });

    return (
        <div className="App">
            <AppHeader />
            <div  className='app-grid'>
                {tattooElements}
            </div>
        </div>
    );
}

export default App;
