import { useSelector } from 'react-redux';
import { selectMission } from '../../redux/Mission/MissionSice';

const MyProfile = () => {
  // Make sure you're using the correct slice name here
  const { rockets } = useSelector((state) => state.rockets);
  const { missionData, joinedMissions } = useSelector(selectMission);
  const missionID = joinedMissions;

  const Missioners = missionData.filter((mission) => missionID.includes(mission.mission_id));

  return (
    <>
      <section className="myProfileContainer">
        <div className="sectionA">
          <h2>My Missions</h2>
          <ul className="rockets">
            {Missioners.map((mission) => (
              <li key={mission.mission_id} className="missioName">
                {mission.mission_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="sectionB">
          <h2>My Rockets</h2>
          <ul className="rockets">
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
