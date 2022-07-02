import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Section from './component/Section';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let movie1 = {
  title : "After Yang" ,
  story : "When his young daughter's beloved companion an android named Yang.",
  year : "2021" 
}

let movie2 = {
  title : "Trevor: The Musical" ,
  story : "After an embarrassing incident at school, Trevor, a charming 13-year-old, must summon the courage to forge his own path on a turbulent journey of self-discovery to uncover what it means to be a queer teenager.",
  year : "2022" 
}

let movie3 = {
  title : "American Fable" ,
  story : "With her family's livelihood imperiled by the farm crisis during the 1980s, 11-year-old Gitty loses herself in a world of fantasy and make believe. ",
  year : "2016" 
}
let movie4 = {
  title : "Rise" ,
  story : "After emigrating from Nigeria to Greece, the Antetokounmpos struggle to care for their five children. ",
  year : "2022" 
}
let movie5 = {
  title : "Everything, Everything" ,
  story : "Maddy, who suffers from a severe immunodeficiency disorder, is forced to remain indoors. She falls in love with Olly, who lives next door, much to her mother Pauline's dismay.",
  year : "2017" 
}
let movie6 = {
  title : "CODA" ,
  story : "Ruby is the only hearing member of a deaf family from Gloucester, Massachusetts.",
  year : "2021" 
}
let movie7 = {
  title : "Oblivion" ,
  story : "Jack Harper, a drone repairman stationed on Earth that has been ravaged by war with extraterrestrials, questions his identity after rescuing the woman who keeps appearing in his dreams.",
  year : "2013" 
}
let movie8 = {
  title : "I’m Charlie Walker" ,
  story : "In 1971 two oil tankers collide off the coast of San Francisco, spilling millions of gallons of crude oil and creating an environmental disaster.",
  year : "2022" 
}
root.render(
  <React.StrictMode>
    <App></App>
    <Section movieInfo1={movie1} movieInfo2={movie2} movieInfo3={movie3} movieInfo4={movie4} movieInfo5={movie5} movieInfo6={movie6} movieInfo7={movie7} movieInfo8={movie8}></Section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
