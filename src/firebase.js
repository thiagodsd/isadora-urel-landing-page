import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBc8fI1SlSsWzf5KG_Rly6eu5ostIcybLQ",
    authDomain: "isadora-urel-landing-page.firebaseapp.com",
    projectId: "isadora-urel-landing-page",
    storageBucket: "isadora-urel-landing-page.appspot.com",
    messagingSenderId: "421904175792",
    appId: "1:421904175792:web:15fa59663b19d545706175",
    measurementId: "G-1NJ9WHX9N5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };