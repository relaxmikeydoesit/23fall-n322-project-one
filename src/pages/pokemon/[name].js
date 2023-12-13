import React from "react";
import { useRouter } from "next/router";
import { Loader, Image } from "semantic-ui-react"; 
import styles from '@/styles/pokestyle.module.css'
export default function PokemonName() {
    const [pokemonInfo, setPokemonInfo] = React.useState( {loading: true} );
    const router = useRouter();

React.useEffect(function() {
    if (pokemonInfo.name !== router.query.name && router.query.name) {
        console.log('load in Pokemon info', router.query.name);
        fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((r) => r.json())
        .then(function (r) {
            setPokemonInfo (r);
        })
        .catch((e) => setPokemonInfo({ loading: false, id: 0 }));
        }
    });
    //console.log(router.query);
    return (
      <> 
 {/* <h1>Pokemon Name:  {router.query.name}</h1> */}
 <Loader active={pokemonInfo.loading || pokemonInfo.name !== router.query.name} />
    {
        //if this statement
        pokemonInfo.id ? 
        //then do this
        <>
        <div className={styles.pokedex}> 
        <Image size="medium" alt='image of Pokemon' src={pokemonInfo.sprites.front_default} />
        <p id={styles.positionedName}>Name:  {router.query.name}</p>
        {/* <Image size="medium" src={pokemonInfo.sprites.back_default} /> */}
        <p></p>
        </div>
        </>
        //else do this
        : <>
        {isNaN(pokemonInfo.id) 
        ? <h2>Searching for a Pokemon</h2> : <h2>Pokemon Not Found.</h2>
        }
        Pokemon Not Found.
        </>
    }

 </>
        
    )
}