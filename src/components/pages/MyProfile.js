/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import { selectMission } from '../../redux/Mission/MissionSice';

const MyProfile = () => {
  // Make sure you're using the correct slice name here
  const { rockets } = useSelector((state) => state.rockets);
  const { missionData, joinedMissions } = useSelector(selectMission);
  const missionID = joinedMissions;

  const Missioners = missionData.filter((mission) => missionID.includes(mission.mission_id));
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="myProfileContainer">
      <div className="sectionA">
        <h2>My Missions</h2>
        {Missioners.length > 0 ? (
          <ul className="missions">
            {Missioners.map((mission) => (
              <li key={mission.mission_id}>
                <span className="status-badge">Active Member</span>
                <div>
                  <strong>{mission.mission_name}</strong>
                  <p style={{ margin: '0.5rem 0 0', color: '#666', fontSize: '0.9rem' }}>
                    Mission ID: {mission.mission_id.slice(0, 8)}...
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">
            You haven&apos;t joined any missions yet.
            <br />
            <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Explore the Missions page to join exciting space missions!
            </span>
          </p>
        )}
      </div>

      <div className="sectionB">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <ul className="rockets">
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <span className="status-badge reserved">Reserved</span>
                <div>
                  <strong>{rocket.rocket_name}</strong>
                  <p style={{ margin: '0.5rem 0 0', color: '#666', fontSize: '0.9rem' }}>
                    Rocket ID: {rocket.id.slice(0, 8)}...
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">
            You haven&apos;t reserved any rockets yet.
            <br />
            <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Visit the Rockets page to reserve your space vehicle!
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
