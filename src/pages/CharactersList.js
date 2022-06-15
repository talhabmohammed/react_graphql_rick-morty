import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Loading</div>;

  if (error) return <div>Somethig went wrong </div>;

  return (
    <>
      <Link to={"/search"} className="text-link">
        <p>Locations</p>
      </Link>
      <div className="CharacterList">
        {data.characters.results.map((character) => {
          return (
            <Link to={`/${character.id}`}>
              <img src={character.image} alt="Profile pic" />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}
