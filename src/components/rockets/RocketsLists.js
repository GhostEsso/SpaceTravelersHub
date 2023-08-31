import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/RocketsSlice';
import styles from './rocket.module.css';

const RocketList = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const Dispatch = useDispatch();

  if (status) {
    return 'Loading...';
  }

  if (error) {
    return 'An error occurred';
  }

  return (
    <div className="rocketContainer">
      {rockets.map((rocket) => (
        <section className="Space" key={rocket.id}>
          <div className="img">
            <img src={rocket.rocket_flickr_images} alt="" />
          </div>
          <div className="details">
            <h2>{rocket.rocket_name}</h2>
            <p>
              <span className={rocket.reserved ? styles.badge : ''}>
                {rocket.reserved ? 'RESERVED' : ''}
              </span>
              {rocket.description}
            </p>
            <button
              className={`${
                rocket.reserved ? styles.reserve : styles.unreserve
              }`}
              onClick={() => Dispatch(reserveRocket(rocket.id))}
              type="button"
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default RocketList;
