import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "antd/dist/reset.css";
import "./App.css";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./assets/image/logo.svg";
import { fecthPokemosnWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  //const Loading = false;
  const Loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  //console.log(pokemon);
  //console.log(Loading);

  useEffect(() => {
    dispatch(fecthPokemosnWithDetails());
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {Loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemon={pokemons ? pokemons : []} />
      )}
    </div>
  );
}

export default App;
