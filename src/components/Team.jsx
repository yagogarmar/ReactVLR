import React, { useState, useEffect } from 'react'


const Team = ({ team }) => {

   
  return (
    <>
        <div className='conTeam'> 
          <div className='contRank'>
            <h1>{team.rank}</h1>
          </div>
            
            <img src={team.logo} alt="" />
            <h2>{team.team}</h2>

            <div className='contDatos'> 
              <h4>LAST MATCH</h4>
              <h5>{team.last_played}</h5>
              <h5>{team.team} {team.last_played_team}</h5>
            </div>
        </div>
    </>
  )
}

export default Team