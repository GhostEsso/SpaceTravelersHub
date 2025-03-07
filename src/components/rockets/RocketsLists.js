import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/RocketsSlice';
import { FetchData } from '../../redux/rockets/Api';
import styles from './rocket.module.css';

const RocketList = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(FetchData());
    }
  }, [dispatch, rockets.length]);

  const handleReserve = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

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
              {rocket.reserved && (
                <span className={styles.badge}>RÉSERVÉ</span>
              )}
              {rocket.description}
            </p>
            <button
              type="button"
              className={rocket.reserved ? styles.reserve : styles.unreserve}
              onClick={() => handleReserve(rocket.id)}
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
