import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase,FieldValue} from './lib/firebase';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase,FieldValue}}>
<App />
    </FirebaseContext.Provider>
);


// client side rendered app:react
// -> database which is firebase
// tailwind
//hooks
//react-loading skeleton
//folder structure
//src

// -> components,constants, contxt,helpers,lib(firebase is going to live in here),services(firebase functions in here)
// styles (tailwinds folder (app,tailwind))