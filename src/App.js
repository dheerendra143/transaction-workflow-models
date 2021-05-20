import arrow from './arrow.png';
import './App.css';
import React, { useState } from 'react';
import Canvas from './Canvas';
import Download from './download'

function App() {
   
    return (
        <div className="App">
            <header>
                <h1>Transaction Flowchart Modal</h1>

            </header>
            <main>
                <Canvas />
               
            </main>
            <footer>
                <br/>
                <Download label={'Download Entity'} />
            </footer>

        </div>
    );
}

export default App;
