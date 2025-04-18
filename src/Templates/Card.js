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
    <div className="d-inline-flex align-items-center bg-light rounded-pill px-3 py-1 me-2 mb-1">
      <img 
        src={typeImage} 
        alt={type.name} 
        style={{ width: "24px", height: "24px", marginRight: "4px" }} 
      />
      <span className="text-capitalize fw-medium small">{type.name}</span>
    </div>
  );
};

// Stats display component
const StatBar = ({ label, value, maxValue = 255, colorClass = "bg-primary" }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="mb-1">
      <div className="d-flex justify-content-between mb-1">
        <span className="small fw-medium">{label}:</span>
        <span className="small fw-bold">{value}</span>
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div 
          className={`progress-bar ${colorClass}`} 
          role="progressbar" 
          style={{ width: `${percentage}%` }}
          aria-valuenow={value} 
          aria-valuemin="0" 
          aria-valuemax={maxValue}
        ></div>
      </div>
    </div>
  );
};

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Generate color class based on pokemon type
  const getTypeColorClass = (type) => {
    const typeColors = {
      grass: "bg-success",
      bug: "bg-success text-white",
      dark: "bg-dark text-white",
      dragon: "bg-purple text-white",
      electric: "bg-warning",
      fairy: "bg-info",
      fighting: "bg-danger text-white",
      fire: "bg-danger text-white",
      flying: "bg-info",
      ghost: "bg-indigo text-white",
      ground: "bg-warning",
      ice: "bg-info",
      normal: "bg-secondary",
      psychic: "bg-danger",
      poison: "bg-purple text-white",
      rock: "bg-secondary text-white",
      steel: "bg-secondary",
      water: "bg-primary text-white",
    };
    
    return typeColors[type] || "bg-secondary";
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

  // Calculate primary type and its color class
  const primaryType = pokemon?.types?.[0]?.type?.name || 'normal';
  const headerColorClass = getTypeColorClass(primaryType);
  const progressColorClass = headerColorClass.split(' ')[0]; // Just get the bg- class

  // Card styles for hover effects
  const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  };

  if (loading) {
    return (
      <div className="card shadow-sm p-4 d-flex justify-content-center align-items-center" style={{ minHeight: "250px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="card shadow-sm p-4">
        <p className="text-danger text-center m-0">{error || "Error loading data"}</p>
      </div>
    );
  }

  // Card rendering
  return (
    <Link 
      to={`/detailpage/${pokemon.id}`} 
      style={cardLinkStyle}
      className="pokemon-card-link"
    >
      <div 
        className="card shadow-sm border overflow-hidden h-100"
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
        }}
      >
        {/* Card Header with Pokemon ID and Name */}
        <div className={`card-header ${headerColorClass} py-2 px-3 d-flex justify-content-between align-items-center`}>
          <span className="fw-bold">#{pokemon.id.toString().padStart(3, '0')}</span>
          <h5 className="text-capitalize m-0 fw-bold">{pokemon.name}</h5>
        </div>
        
        {/* Card Image */}
        <div className="bg-light text-center p-3">
          <img 
            src={artworkUrl} 
            alt={pokemon.name} 
            className="img-fluid"
            style={{ 
              maxHeight: "160px", 
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))" 
            }} 
          />
        </div>
        
        {/* Card Body */}
        <div className="card-body">
          {/* Pokemon Types */}
          <div className="mb-3">
            <p className="text-muted small mb-1">Type</p>
            <div className="d-flex flex-wrap">
              {pokemon.types.map(typeInfo => (
                <TypeBadge key={typeInfo.type.name} type={typeInfo.type} />
              ))}
            </div>
          </div>
          
          {/* Pokemon Info */}
          <div className="row row-cols-2 g-2 mb-3">
            <div className="col">
              <p className="text-muted small mb-1">Weight</p>
              <p className="fw-medium">{(pokemon.weight/10).toFixed(1)} kg</p>
            </div>
            <div className="col">
              <p className="text-muted small mb-1">Height</p>
              <p className="fw-medium">{(pokemon.height/10).toFixed(1)} m</p>
            </div>
            <div className="col">
              <p className="text-muted small mb-1">Base Exp</p>
              <p className="fw-medium">{pokemon.base_experience || 'N/A'}</p>
            </div>
          </div>
          
          {/* Base Stats Preview */}
          {pokemon.stats && (
            <div className="mt-3">
              <p className="text-muted small mb-1">Base Stats</p>
              <StatBar 
                label="HP" 
                value={pokemon.stats[0].base_stat} 
                colorClass={progressColorClass}
              />
              <StatBar 
                label="Attack" 
                value={pokemon.stats[1].base_stat} 
                colorClass={progressColorClass}
              />
            </div>
          )}
          
          <div className="text-center mt-3">
            <button className={`btn btn-sm ${headerColorClass}`}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
