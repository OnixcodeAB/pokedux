import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/reset.css";
import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./assets/image/logo.svg";
import { getPokemon, getPokemonDetails } from "./api";
import { setPokemon } from "./actions";

function App() {
  //const [pokemon, setpokemon] = useState([]);
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResp = await getPokemon();
      const pokemonDetails = await Promise.all(
        pokemonResp.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemon(pokemonDetails));
    };
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
