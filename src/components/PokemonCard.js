import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ ...single }) {

  const { id, name, hp, sprites } = single

  const [image, setImage] = useState(true)

  function imageHandler() {
    setImage((prev) => !prev)
  }


  return (
    <Card>
      <div>
        <div onClick={imageHandler} className="image">
          {image ? <img src={sprites.front} alt="oh no!" /> : <img src={sprites.back} alt="oh no!" />}

        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
