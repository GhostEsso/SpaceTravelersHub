import { useSelector } from 'react-redux';
import Navigation from '../Navigation';

const MyProfile = () => {
  // Make sure you're using the correct slice name here
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <>
      <Navigation />
      <section className="myProfileContainer">
        {/* Bro Sodeeq will implement the SectionA(Missions) here */}
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
