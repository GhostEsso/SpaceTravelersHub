import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/RocketsSlice';
import styles from './rocket.module.css';

const RocketList = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (status === 'loading') {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p>Chargement des fusées...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="error-container">
        <p>
          Erreur:
          {' '}
          {error || 'Impossible de charger les fusées'}
        </p>
        <button onClick={() => window.location.reload()} type="button">
          Réessayer
        </button>
      </div>
    );
  }

  if (!rockets.length) {
    return (
      <div className="empty-container">
        <p>Aucune fusée disponible</p>
      </div>
    );
  }

  return (
    <div className="rocketContainer">
      {rockets.map((rocket) => (
        <section className="Space" key={rocket.id}>
          <div className="img">
            <img src={rocket.rocket_flickr_images} alt={rocket.rocket_name} />
          </div>
          <div className="details">
            <h2>{rocket.rocket_name}</h2>
            <p>
              <span className={rocket.reserved ? styles.badge : ''}>
                {rocket.reserved ? 'RÉSERVÉ' : ''}
              </span>
              {rocket.description}
            </p>
            <button
              className={`${rocket.reserved ? styles.reserve : styles.unreserve}`}
              onClick={() => dispatch(reserveRocket(rocket.id))}
              type="button"
            >
              {rocket.reserved ? 'Annuler la réservation' : 'Réserver la fusée'}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default RocketList;
