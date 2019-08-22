import React from 'react';


function ScoreBoard(props){
    console.log(props)
    return (
        <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{props.hScore}</div>
          </div>
          <div className="timer" >{props.min}:{props.secs}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.aScore}</div>
          </div>
        </div>
      </section>
    )
}

export default ScoreBoard;