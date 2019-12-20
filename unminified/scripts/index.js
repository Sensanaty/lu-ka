import * as firebase from "firebase/app";
import "firebase/database";

console.log(`%c
 _        _    _   _  __                 __  __   ______ 
| |      | |  | | | |/ /     /\\         |  \\/  | |  ____|
| |      | |  | | | ' /     /  \\        | \\  / | | |__   
| |      | |  | | |  <     / /\\ \\       | |\\/| | |  __|  
| |____  | |__| | | . \\   / ____ \\   _  | |  | | | |____ 
|______|  \\____/  |_|\\_\\ /_/    \\_\\ (_) |_|  |_| |______|
\n\t\t\t   %cMade with %c❤️ %cby %cLuka Salević %caka %cSensanaty\n\t\t\t\t\t\t\t\t\t\t\t %c(on Github)\n`,
    "font-size: 15px; color: #e69900;",
    "color: #26FD3C; font-size: 13px;",
    "color: red",
    "color: #26FD3C; font-size: 13px;",
    "color: #26FD3C; font-size: 15px;",
    "color: #26FD3C; font-size: 13px;",
    "color: #26FD3C; font-size: 15px;",
    "color: #26FD3C; font-size: 9px;");
console.log(
    `\t\t\t\t\t\t%cCurious about the source? It's on GitHub!\n\t\t\t\t\t   https://github.com/Sensanaty/lu-ka`,
    "color: #FFA500; font-size: 13px;");

if (window.location.pathname + window.location.search == "/public/contact.html") {
    const firebaseConfig = {
        apiKey: "AIzaSyBPi5Iux33fjT90k-84jhJUpFFJZUWC-L8",
        authDomain: "lukadotme.firebaseapp.com",
        databaseURL: "https://lukadotme.firebaseio.com",
        projectId: "lukadotme",
        storageBucket: "lukadotme.appspot.com",
        messagingSenderId: "277562862746",
        appId: "1:277562862746:web:837631177e6205360b8323"
    };

    firebase.initializeApp(firebaseConfig);
    console.log("Firebase Initialized");
}
