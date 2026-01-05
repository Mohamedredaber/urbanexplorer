// PlacesList.jsx
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredPlaces } from '../../../features/places/placesSelectors';
import PlaceCard from './PlaceCard';
import './PlacesList.css';

const PlacesList = () => {
  const places = useSelector(selectFilteredPlaces);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  const sortedPlaces = useMemo(() => {
    const placesCopy = [...places];
    
    switch (sortBy) {
      case 'rating':
        return placesCopy.sort((a, b) => b.rating - a.rating);
      case 'likes':
        return placesCopy.sort((a, b) => b.likes - a.likes);
      case 'price_low':
        return placesCopy.sort((a, b) => a.price - b.price);
      case 'price_high':
        return placesCopy.sort((a, b) => b.price - a.price);
      case 'name':
        return placesCopy.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return placesCopy;
    }
  }, [places, sortBy]);

  if (sortedPlaces.length === 0) {
    return (
      <div className="places-empty-state">
        <div className="empty-state-content">
          <h3>Aucun lieu trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
          <div className="empty-state-tips">
            <p>Conseils :</p>
            <ul>
              <li>Élargissez votre recherche à d'autres villes</li>
              <li>Modifiez les catégories sélectionnées</li>
              <li>Réduisez le filtre de note minimale</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="places-list-container">
      {/* En-tête avec contrôles */}
      <div className="places-list-header">
        <div className="header-left">
          <h2 className="places-count">
            {sortedPlaces.length} lieu{sortedPlaces.length > 1 ? 'x' : ''} 
            <span className="count-subtitle"> trouvé{sortedPlaces.length > 1 ? 's' : ''}</span>
          </h2>
        </div>

        <div className="header-right">
          {/* Boutons de vue */}
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Vue grille"
            >
              <span className="view-icon grid-icon"></span>
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="Vue liste"
            >
              <span className="view-icon list-icon"></span>
            </button>
          </div>

          {/* Tri */}
          <div className="sort-control">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Tri par défaut</option>
              <option value="rating">Meilleures notes</option>
              <option value="likes">Plus populaires</option>
              <option value="price_low">Prix croissant</option>
              <option value="price_high">Prix décroissant</option>
              <option value="name">Ordre alphabétique</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste/Grille des lieux */}
      <div className={`places-${viewMode}`}>
        {sortedPlaces.map(place => (
          <PlaceCard 
            key={place.id} 
            place={place} 
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

export default PlacesList;