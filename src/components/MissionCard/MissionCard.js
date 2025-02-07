/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  joinMission,
  leaveMission,
  selectMission,
} from '../../redux/Mission/MissionSice';
import './MissionCard.css';

function MissionCard() {
  const dispatch = useDispatch();
  const { missionData, isLoading, error } = useSelector(selectMission);

  const handleToggleMission = (missionId, reserved) => {
    if (reserved) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p>Loading missions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="missionCard">
      <header>
        <h3>Mission</h3>
        <h3>Description</h3>
        <h3>Status</h3>
        <h3>Action</h3>
      </header>

      <div className="mission-list">
        {missionData.map((mission) => (
          <div key={mission.mission_id} className="mission-row">
            <div className="mission-name">
              {mission.mission_name}
            </div>

            <div className="mission-description">
              {mission.description}
            </div>

            <div className="status-container">
              <span className={`status-badge ${mission.reserved ? 'active-member' : 'not-member'}`}>
                {mission.reserved ? 'Active Member' : 'Not A Member'}
              </span>
            </div>

            <div className="action-container">
              <button
                type="button"
                onClick={() => handleToggleMission(mission.mission_id, mission.reserved)}
                className={`action-button ${mission.reserved ? 'leave-button' : 'join-button'}`}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionCard;
