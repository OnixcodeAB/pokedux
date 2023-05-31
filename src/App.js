import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/reset.css";
import "./App.css";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./assets/image/logo.svg";
import { getPokemon } from "./api";
import { getPokemonWithDetails } from "./actions";

function App() {
  //const [pokemon, setpokemon] = useState([]);
  const pokemon = useSelector((state) => state.pokemon);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResp = await getPokemon();
      /*       const pokemonDetails = await Promise.all(
        pokemonResp.map((pokemon) => getPokemonDetails(pokemon))
      ); */
      dispatch(getPokemonWithDetails(pokemonResp));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemon={pokemon} />
      )}
    </div>
  );
}

export default App;
