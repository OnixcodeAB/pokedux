import React, { useState } from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StartButton from "./StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, abilities, types, id }) => {
  const [favorite, setfavorite] = useState();
  const dispatch = useDispatch();
  //console.log(ability)
  //const image = sprites.front_default;
  const typeString = types.map((elem) => elem.type.name).join(", ");

  const handleOnfavorite = () => {
    dispatch(setFavorite(id));
    setfavorite(!favorite);
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleOnfavorite} />}
    >
      <Meta description={typeString} />
      <Meta
        description={
          <ul>
            {abilities.map((item) => (
              <li key={item.ability.name}>{item.ability.name}</li>
            ))}
          </ul>
        }
      />
    </Card>
  );
};

export default PokemonCard;
