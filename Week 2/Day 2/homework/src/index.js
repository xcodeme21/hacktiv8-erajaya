import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Meetup from "./Meetup";
import NextMeetup from "./NextMeetup";
import AboutMeetup from "./AboutMeetup";
import Members from "./Members";
import PastMeetups from "./PastMeetups";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Meetup />
    <NextMeetup />
    <AboutMeetup />
    <Members />
    <PastMeetups />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
