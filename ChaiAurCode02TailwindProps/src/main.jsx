import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Card from "./components/card.jsx";
import "./index.css";
import MainOfCards from "./components/cardGrid.jsx";

// variables
let DevDetails = {
  name: "GD",
  age: 20,
  ethnicity: "Pathan",
  BelongsTo: 'Pakistan',
  languages: ["English", "Urdu", "Sindhi", "Balochi", "Punjabi"],
};

let programmingSkills=[
    'HTML',
    'CSS',
    'TailWind',
    'Responsive Design',
    'JavaScript',
    'TypeScript', 
    'React.js',
    'Next.js(Learning)'

]

const Movie = "Watch Now";
const Game = "Play Game";
const Profile = "Visit Profile";
const website = "Explore Site";
const Article = "Read More";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* seprate each import with a horizontal rule == <hr /> */}

    {/* <Card  DevSkills={programmingSkills} DevDetails={DevDetails} /> */}

    <div className='grid grid-flow-col grid-rows-2 gap-5 '>
    <Card Main="Ron Weasley" ClickTo={Profile}/>
    <Card Main="CallOfDuty" ClickTo={Game}/>
    <Card Main='Ghost Rider' ClickTo={Movie}/>
    <Card Main='Wikipedia' ClickTo={website}/> 
    <Card Main='Olaf' ClickTo={Article}/>
    <Card Main='Shrek' />
    </div>
  </StrictMode>
);
