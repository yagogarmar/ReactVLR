import React, { useState, useEffect } from 'react'


const Team = ({ team }) => {

   
  return (
    <>
        <div>
            <p>{team.team}</p>
            <img src={team.logo} alt="" />
        </div>
    </>
  )
}

export default Team