// PlaceCard.jsx
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleLike, toggleFavorite } from '../../../features/places/likesThunks';
import { selectCurrentUser } from '../../../features/auth/authSelectors';
import './PlaceCard.css';

const PlaceCard = ({ place, viewMode = 'grid' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (user) {
      function likeuser(){
        setIsLiked(place.userLikes?.includes(user.id) || false);
        setIsFavorite(place.favorites?.includes(user.id) || false);
      }
      likeuser()
    }
  }, [place, user]);

  const handleLike = async () => {
    if (!user) {
      alert('Veuillez vous connecter pour aimer ce lieu');
      return;
    }
    try {
      await dispatch(toggleLike({ placeId: place.id, userId: user.id }));
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Erreur lors du like:', error);
    }
  };

  const handleFavorite = async () => {
    if (!user) {
      alert('Veuillez vous connecter pour ajouter aux favoris');
      return;
    }
    try {
      await dispatch(toggleFavorite({ placeId: place.id, userId: user.id }));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Erreur lors de l\'ajout aux favoris:', error);
    }
  };

  const handleViewOnMap = () => {
    navigate(`/map?lat=${place.lat}&lng=${place.lng}&place=${place.id}`);
  };

  const getPriceLevel = (price) => {
    if (!price || price < 1) return 'Prix non spécifié';
    if (price <= 2) return 'Économique';
    if (price <= 3) return 'Moyen';
    if (price <= 4) return 'Élevé';
    return 'Premium';
  };

  const getPriceInDH = (price) => {
    if (!price || price < 1) return '';
    const ranges = {
      1: '0-100 DH',
      2: '100-300 DH',
      3: '300-600 DH',
      4: '600-1000 DH',
      5: '1000+ DH'
    };
    return ranges[price] || '';
  };

  const isConnected = !!user;

  return (
    <div 
      className={`place-card ${viewMode} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image ajoutée avec des classes */}
      <div className="place-image-container">
        <img 
          src={place.image} 
          alt={place.name}
          className="place-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('no-image');
          }}
        />
        <div className="image-overlay">
          <div className="place-badges">
            <span className="badge city">{place.city}</span>
            {place.is_open_now ? (
              <span className="badge open">Ouvert</span>
            ) : (
              <span className="badge closed">Fermé</span>
            )}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="place-card-content">
        <div className="place-title-section">
          <h3 className="place-name">{place.name}</h3>
          <div className="place-rating">
            <span className="rating-value">{place.rating?.toFixed(1) || '0.0'}</span>
            <span className="rating-star">/5</span>
            <span className="rating-count">({place.review_count || 0} avis)</span>
          </div>
        </div>

        <p className="place-description">
          {place.description || "Aucune description disponible."}
        </p>

        <div className="place-details">
          {place.category && (
            <div className="detail-item">
              <span className="detail-label">Catégorie</span>
              <span className="detail-value">{place.category}</span>
            </div>
          )}
          
          <div className="detail-row">
            {place.distance && (
              <div className="detail-item compact">
                <span className="detail-label">Distance</span>
                <span className="detail-value">{place.distance} km</span>
              </div>
            )}
            {place.price && (
              <div className="detail-item compact">
                <span className="detail-label">Prix</span>
                <span className="detail-value">
                  {getPriceLevel(place.price)}
                </span>
              </div>
            )}
          </div>
          
          {place.price && getPriceInDH(place.price) && (
            <div className="price-range">
              {getPriceInDH(place.price)}
            </div>
          )}
        </div>
        <div className="place-card-actions">
          <button 
            onClick={handleViewOnMap}
            className="btn-primary"
          >
            Voir sur la carte
          </button>

          <div className="interaction-buttons">
            {isConnected ? (
              <>
                <button 
                  onClick={handleLike}
                  className={`btn-icon ${isLiked ? 'liked' : ''}`}
                  title={isLiked ? "Retirer le like" : "Ajouter un like"}
                >
                  <span className="btn-icon-text">{isLiked ? '♥' : '♡'}</span>
                  {place.likes > 0 && <span className="count">{place.likes}</span>}
                </button>

                <button 
                  onClick={handleFavorite}
                  className={`btn-icon ${isFavorite ? 'favorited' : ''}`}
                  title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                >
                  <span className="btn-icon-text">{isFavorite ? '★' : '☆'}</span>
                </button>
              </>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="btn-login"
              >
                Connectez-vous
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;