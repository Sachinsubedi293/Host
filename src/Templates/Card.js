import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Type mapping object for better code organization
const TYPE_IMAGES = {
  grass: '/Static/Type-grass.png',
  bug: '/Static/Type-bug.png',
  dark: '/Static/Type-dark.png',
  dragon: '/Static/Type-dragon.png',
  electric: '/Static/Type-electric.png',
  fairy: '/Static/Type-fairy.png',
  fighting: '/Static/Type-fighting.png',
  fire: '/Static/Type-fire.png',
  flying: '/Static/Type-flying.png',
  ghost: '/Static/Type-ghost.png',
  ground: '/Static/Type-ground.png',
  ice: '/Static/Type-ice.png',
  normal: '/Static/Type-normal.png',
  psychic: '/Static/Type-phychic.png', // Fixed typo from 'phychic'
  poison: '/Static/Type-poison.png',
  rock: '/Static/Type-rock.png',
  steel: '/Static/Type-steel.png',
  water: '/Static/Type-water.png'
};

// Type badge component for reusability
const TypeBadge = ({ type }) => {
  if (!type) return null;
  
  const typeImage = TYPE_IMAGES[type.name] || TYPE_IMAGES.normal;
  
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2 mb-1">
      <img 
        src={typeImage} 
        alt={type.name} 
        className="w-6 h-6 mr-1" 
      />
      <span className="capitalize font-medium text-sm">{type.name}</span>
    </div>
  );
};

// Stats display component
const StatBar = ({ label, value, maxValue = 255, color = "bg-blue-500" }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="mb-1">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}:</span>
        <span className="text-sm font-bold">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Generate color based on pokemon type
  const getTypeColor = (type) => {
    const typeColors = {
      grass: "bg-green-500",
      bug: "bg-lime-500",
      dark: "bg-gray-700",
      dragon: "bg-purple-700",
      electric: "bg-yellow-400",
      fairy: "bg-pink-300",
      fighting: "bg-red-700",
      fire: "bg-red-500",
      flying: "bg-sky-300",
      ghost: "bg-indigo-700",
      ground: "bg-amber-600",
      ice: "bg-cyan-300",
      normal: "bg-gray-400",
      psychic: "bg-fuchsia-500",
      poison: "bg-violet-500",
      rock: "bg-stone-500",
      steel: "bg-slate-400",
      water: "bg-blue-500",
    };
    
    return typeColors[type] || "bg-gray-400";
  };

  // Loading data from API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setPokemon(response.data);
      } catch (err) {
        setError("Failed to load Pokémon data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [url]);

  // Calculate artwork URL
  const artworkUrl = useMemo(() => {
    if (!pokemon) return '';
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  }, [pokemon]);

  // Calculate primary type and its color
  const primaryType = pokemon?.types?.[0]?.type?.name || 'normal';
  const cardColor = getTypeColor(primaryType);
  const textColor = ['dark', 'dragon', 'ghost', 'fighting'].includes(primaryType) ? "text-white" : "text-gray-800";

  if (loading) {
    return (
      <div className="w-full max-w-sm mx-auto p-4 rounded-lg shadow-md bg-white flex justify-center items-center h-64">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-blue-500 border-r-transparent"></div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="w-full max-w-sm mx-auto p-4 rounded-lg shadow-md bg-white">
        <p className="text-red-500 text-center">{error || "Error loading data"}</p>
      </div>
    );
  }

  // Card rendering
  return (
    <Link 
      to={`/detailpage/${pokemon.id}`} 
      className="block w-full max-w-sm mx-auto transform transition-transform hover:scale-105"
    >
      <div className={`rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-xl`}>
        {/* Card Header with Pokemon ID and Name */}
        <div className={`${cardColor} ${textColor} py-2 px-4 flex justify-between items-center`}>
          <span className="font-bold">#{pokemon.id.toString().padStart(3, '0')}</span>
          <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
        </div>
        
        {/* Card Image */}
        <div className="bg-gray-100 p-4 flex justify-center">
          <img 
            src={artworkUrl} 
            alt={pokemon.name} 
            className="w-40 h-40 object-contain drop-shadow-md" 
          />
        </div>
        
        {/* Card Body */}
        <div className="p-4 bg-white">
          {/* Pokemon Types */}
          <div className="mb-3">
            <p className="text-sm text-gray-500 mb-1">Type</p>
            <div className="flex flex-wrap">
              {pokemon.types.map(typeInfo => (
                <TypeBadge key={typeInfo.type.name} type={typeInfo.type} />
              ))}
            </div>
          </div>
          
          {/* Pokemon Info */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <p className="text-sm text-gray-500">Weight</p>
              <p className="font-medium">{(pokemon.weight/10).toFixed(1)} kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-medium">{(pokemon.height/10).toFixed(1)} m</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Base Exp</p>
              <p className="font-medium">{pokemon.base_experience || 'N/A'}</p>
            </div>
          </div>
          
          {/* Base Stats Preview */}
          {pokemon.stats && (
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-1">Base Stats</p>
              <StatBar 
                label="HP" 
                value={pokemon.stats[0].base_stat} 
                color={cardColor}
              />
              <StatBar 
                label="Attack" 
                value={pokemon.stats[1].base_stat} 
                color={cardColor}
              />
            </div>
          )}
          
          <div className="mt-3 text-center">
            <button className={`${cardColor} ${textColor} rounded-full py-1 px-4 text-sm font-medium`}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
