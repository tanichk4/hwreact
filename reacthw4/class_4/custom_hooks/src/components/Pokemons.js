import { useFetch } from "../hooks/useFetch";
import { Poke } from "./Poke";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
export const Pokemons = () => {
  const { data: pokements, error, loading } = useFetch(BASE_URL);
  return (
    <div>
      {loading && <div>Loader...</div>}
      {error && !loading && <div>Error: {error}.</div>}
      {!error &&
        !loading &&
        pokements?.map((poke) => <Poke {...poke} key={poke.name} />)}
    </div>
  );
};
