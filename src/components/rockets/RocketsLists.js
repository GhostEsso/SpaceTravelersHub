import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/rockets/RocketsSlice';

const Lists = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  if (status) {
    return <div className="loading">...Loading</div>;
  }

  if (error) {
    return <div className="error">There is an error</div>;
  }

  return (
    <div className="rocketContainer">
      {rockets.map((rocket) => (
        <section className="Space" key={rocket.rocket_id}>
          <div className="img">
            <img src={rocket.rocket_flickr_images} alt="" />
          </div>
          <div className="details">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button className="rocketbtn" type="button">
              Reserve Rocket
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Lists;
