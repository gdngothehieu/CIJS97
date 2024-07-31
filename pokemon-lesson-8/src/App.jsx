import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import ReactPaginate from 'react-paginate';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [originalPokemonList, setOriginalPokemonList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterPokemonList, setFilterPokemonList] = useState([]);
  let originalList = [];
  useEffect(() => {
    async function getPokemon() {
      let initialPokemonList = [];
      const itemsPerPage = 10;
      const offset = currentPage * itemsPerPage;
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
        const data = await response.json();
        const detailedPokemons = await Promise.all(data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return {
            name: data.name,
            image: data.sprites.front_default
          };
        }));
        setPageCount(Math.ceil(data.count / itemsPerPage))
        setPokemonList(detailedPokemons);
        setFilterPokemonList(detailedPokemons);

      } catch (error) {
        console.error(error);
      } finally {
        setOriginalPokemonList(originalPokemonList);
      }
    }
    getPokemon();
  }, [currentPage]);

  useEffect(()=>{
    if(!keyword){
        setFilterPokemonList(pokemonList);
        return;
    }
    const search = pokemonList.filter(pokemon => {
      return pokemon.name === keyword;
    });
    console.log(search);
    setFilterPokemonList(search);
  },[keyword, pokemonList])

  const handlePageClick = ({selected}) => {
    console.log(selected);
    setCurrentPage(selected);
  }
  console.log(filterPokemonList);
  return (
    <>
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Pokemon"
        required
      />
      <div class="grid grid-cols-4 gap-4">
        {filterPokemonList.map((pokemon) => {
          return (
            <div>
              <img style={{marginLeft: "30%"}} src={pokemon.image} />
              <div>
                <h1 className="text-xl">{pokemon.name}</h1>
              </div>
              
            </div>
          );
        })}
      </div>
      <div style={{marginLeft: "25%", marginTop: "19px"}}>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      </div>
      

    </>
  );
}

export default App;
