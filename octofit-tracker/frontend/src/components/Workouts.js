import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', API_URL);
        console.log('Fetched workouts data:', data);
        setWorkouts(data.results || data);
      });
  }, []);

  return (
    <div className="card p-4 mt-4">
      <h2 className="mb-3">Workouts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Suggested For</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, idx) => (
            <tr key={idx}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
              <td>{workout.suggested_for}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
