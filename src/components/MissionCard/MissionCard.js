import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import {
  // getMissions,
  joinMission,
  leaveMission,
  selectMission,
} from '../../redux/Mission/MissionSice';
import './MissionCard.css';

function MissionCard() {
  const dispatch = useDispatch();
  const { missionData, isLoading } = useSelector(selectMission);
  console.log(missionData);

  // useEffect(() => {
  //   dispatch(getMissions());
  // }, [dispatch]);

  const handleToggleMission = (missionId, reserved) => {
    if (reserved) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
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

        {missionData.map((mission, idx) => (
          <section
            key={mission.mission_id}
            className={
              idx % 2 === 0
                ? 'col-12 d-flex dark flex-row border'
                : 'col-12 d-flex white flex-row border'
            }
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
              <button
                className={mission.reserved ? 'activeMember' : 'notMember'}
                type="button"
              >
                {mission.reserved ? 'active member' : 'not a member'}
              </button>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <button
                onClick={() => handleToggleMission(mission.mission_id, mission.reserved)}
                className={mission.reserved ? 'leave col-10' : 'join col-10'}
                type="button"
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default MissionCard;
