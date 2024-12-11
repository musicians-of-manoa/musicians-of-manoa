'use client';

import JamInfoCard from '@/components/JamInfoCard';
import { useEffect, useState } from 'react';

const AttendedJamsPage = () => {
  const [attendedJams, setAttendedJams] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the list of attended jams from the API or context (use context if necessary)
    async function fetchAttendedJams() {
      try {
        const response = await fetch('/api/jam/get-attended'); // Update with correct API endpoint
        if (response.ok) {
          const data = await response.json();
          setAttendedJams(data); // Store fetched jams in state
        }
      } catch (error) {
        console.error('Failed to fetch attended jams', error);
      }
    }

    fetchAttendedJams();
  }, []);

  return (
    <div>
      <h1>Attended Jams</h1>
      {attendedJams.length > 0 ? (
        attendedJams.map((jam) => (
          <JamInfoCard key={jam.id} Jam={jam} /> // Render JamInfoCard for each attended jam
        ))
      ) : (
        <p>No jams attended yet.</p>
      )}
    </div>
  );
};

export default AttendedJamsPage;
