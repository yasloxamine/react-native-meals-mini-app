import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, SetFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    SetFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    SetFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
     ids: favoriteMealIds,
     addFavorite: addFavorite,
     removeFavorite: removeFavorite,
  };

  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
