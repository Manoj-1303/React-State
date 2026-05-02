import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './counter';
import Generator from './generator';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Counter />
        <br/>
        <hr/>
        <Generator />
      
    </div>
);
