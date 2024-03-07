import {
  setAfiliate, // Importa la acción correcta desde el slice
} from "./afiliateSlice";



export const handleAfiliate = (name: string, lastName: string): any => {
  return async (dispatch: any) => {
    try {
      dispatch(setAfiliate({name,lastName}));
    } catch (error: any) {
      console.error(error);
    }
  };
};
