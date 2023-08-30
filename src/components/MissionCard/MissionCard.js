import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { getMissions, selectMission } from '../../redux/Mission/MissionSice';
import './MissionCard.css';

function MissionCard() {
  const dispatch = useDispatch();
  const missions = useSelector(selectMission);
  console.log(missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      {missions.isLoading ? (
        <Spinner />
      ) : (
        <main className="card missionCard d-flex flex-column">
          <header className="col-12">
            <div className="col-2">
              <h3> Mission</h3>
            </div>
            <div className="col-6">
              <h3>Description</h3>
            </div>
            <div className="col-2">
              <h3>Status</h3>
            </div>
            <div className="col-2">{/* <h3>Status</h3> */}</div>
          </header>

          {missions.missionData.map((mission) => (
            <section
              key={mission.mission_id}
              className="col-12 d-flex flex-row border"
            >
              <div className="col-2">
                <h3>
                  {' '}
                  {mission.mission_name}
                  {' '}
                </h3>
              </div>
              <div className="col-6">
                <p>{mission.description}</p>
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className="notMember col-10" type="button">
                  Not a member
                </button>
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                <button className="join col-10" type="button">
                  Join Mission
                </button>
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default MissionCard;
