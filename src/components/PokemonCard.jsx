import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image, abilities }) => {
  //console.log(ability)
  //const image = sprites.front_default;
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta
        description={
          <ul>
            {abilities.map((item) => (
              <li key={item.ability.name}>
                {item.ability.name}
              </li>
            ))}
          </ul>
        }
      />
    </Card>
  );
};

export default PokemonCard;
