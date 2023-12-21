import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems,addToFavorites}) {
  return (
    <div className="poems-container">
      {poems.map((poem) => {
        return (
          <Poem 
            key={poem.id} 
            poem={poem} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default PoemsContainer;
