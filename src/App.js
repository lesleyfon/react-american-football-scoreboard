//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
// import BottomRow from "./BottomRow";
import ScoreBoard from './components/ScoreBoard'
import { CombineLatestOperator } from "rxjs/internal/observable/combineLatest";
import { SourceNode } from "../../../Library/Caches/typescript/3.5/node_modules/source-map/source-map";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [seconds, setSecondsTime] = useState(0)
  const [minutes, setMinuteTime] = useState(0);
  //Use Effect for To Start timer
  useEffect(()=>{
    const interval = setInterval(()=>{
      setSecondsTime(seconds + 1)
      if(seconds >= 59){
        setSecondsTime(0)
        setMinuteTime(minutes + 1)
      }
    }, 1000);
    return () => clearInterval(interval)
  });


  
  return (
    <div className="container">

      <ScoreBoard 
        //passinbg in props into the scoreboard comnponent  
        hScore = {homeScore}
        min = {minutes}
        secs = {seconds}
        aScore = {awayScore}
      />
    
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick ={e=> {
            e.preventDefault();
            setHomeScore(homeScore + 7)
          }}>Home Touchdown</button>
       
          <button className="homeButtons__fieldGoal"onClick ={e=> {
            e.preventDefault();
            setHomeScore(homeScore + 3)
          }} >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"  onClick ={e=> {
            e.preventDefault();
            setAwayScore(awayScore+ 7)
          }}>>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"  onClick ={e=> {
            e.preventDefault();
            setAwayScore(awayScore + 3)
          }}>>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
