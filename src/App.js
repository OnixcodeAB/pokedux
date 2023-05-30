import { useEffect } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./assets/image/logo.svg";
import { getPokemon } from "./api";
import { connect } from "react-redux";
import { setPokemon } from "./actions";

function App({ pokemon, setPokemon }) {
  //const [pokemon, setpokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResp = await getPokemon();
      setPokemon(pokemonResp);
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

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

const mapDispatchToProps = {
  setPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
