import React from 'react';

const DragonRiders = ({riders}) => {

  const dragonRidersDesc = riders.map(rider => {
    const link = "https://gameofthrones.fandom.com/wiki/" + rider.dragon
    return (
      <div className="dragonLink" key={rider.dragon}>
        Dragon rider {rider.name} is {rider.age} years old and rides
        <a href={link}> {rider.dragon} </a><br/>
      </div>
    )}
  )

  return (
    <div className="DragonRiders">
      <header>
        <h2> Here we present the dragon riders:</h2>
      </header>
      {dragonRidersDesc}
    </div>
  );
}

export default DragonRiders;
