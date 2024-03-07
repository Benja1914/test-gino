import { PokemonService } from "@/services/pokemon.service";
import { handleAfiliate } from "@/store/afiliateStore/thunk";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const CreditSimulationComponent = () => {
    const afiliate = useSelector((state: any) => state.afiliate);
    const dispatch = useDispatch();
    const pokemonService = new PokemonService();

    const getPokemons = async() =>{
        const response = await pokemonService.getPokemonByName('ditto');
        console.log(response);
        await dispatch(handleAfiliate('Benja', 'Navarrete'))
        console.log(afiliate);
    }
    return (
        <>
            <span>Hola desde credit simulation component</span><br />
            <button onClick={getPokemons}>Click</button>
        </>
    );
}

export default CreditSimulationComponent;
