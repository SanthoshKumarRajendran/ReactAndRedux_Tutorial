import React from 'react';

const DragonRiders = ({riders, killDragonRider}) => {

  const dragonRidersDesc = riders.map(rider => {
    const link = "https://gameofthrones.fandom.com/wiki/" + rider.dragon
    return (
      <div className="dragonLink" key={rider.name}>
        Dragon rider {rider.name} is {rider.age} years old and rides
        <a href={link}> {rider.dragon} </a>
        <button onClick={() => {killDragonRider(rider.name)}}>Dracarys</button>
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
