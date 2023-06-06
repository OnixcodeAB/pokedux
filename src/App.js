import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/reset.css";
import "./App.css";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./assets/image/logo.svg";
import { getPokemon } from "./api";
import { getPokemonWithDetails, setLoading } from "./actions";

function App() {
  const pokemon = useSelector((state) => state.getIn(["data", "pokemon"]));
  const Loading = useSelector((state) => state.getIn(["ui", "loading"]));
 
  const dispatch = useDispatch();

  //console.log(pokemon);
  console.log(Loading);

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonResp = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonResp));
      dispatch(setLoading(false));
    };
    fetchPokemon();
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
        <PokemonList pokemon={pokemon ? pokemon : []} />
      )}
    </div>
  );
}

export default App;
