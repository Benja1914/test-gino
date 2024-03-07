import { handleAfiliate } from "@/store/afiliateStore/thunk";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {PokemonService} from '../../services/pokemon.service';
import dynamic from "next/dynamic";

const Afiliate = () => {
  const afiliate = useSelector((state: any) => state.afiliate);
  const dispatch = useDispatch();
  const pokemonService = new PokemonService();

  const getPokemon = async()=>{
    dispatch(handleAfiliate('Benja', 'Navarrete'))
    const response = await pokemonService.getPokemonByName('ditto');
    console.log(response);
  }
  // const CreditSimulation = dynamic(
  //   () => import("silMfCreditSimulation/pages/creditSimulation/index"),
  //   {
  //     ssr: false,
  //     suspense: true,
  //   }
  // );
  
  
  return (
    <React.Fragment>
      <span>Afiliado: {afiliate.name || 'felipe'} {afiliate.lastName || 'Rojas'}</span>
      <br />
      <button onClick={getPokemon} className="w-60 h-10 bg-red-400">Cambia afiliado</button>
      <div className="mt-2">
        {/* <CreditSimulation/> */}
      </div>
    </React.Fragment>
  );
};

export default Afiliate;