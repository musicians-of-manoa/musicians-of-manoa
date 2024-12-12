'use client';

import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { useJamContext, Jam } from './JamsContext'; // Use a single import statement

// eslint-disable-next-line react/prop-types
const AttendJamButton: React.FC<{ jam: Jam }> = ({ jam }) => { // Renamed prop from `Jam` to `jam`
  const { addAttendedJam } = useJamContext(); // Get the addAttendedJam function from context

  const handleAttendJamClick = () => {
    // Add the jam to savedJams through context
    addAttendedJam(jam); // Renamed `Jam` to `jam`

    // Show success message
    swal('Success', 'You have successfully joined the jam!', 'success', {
      timer: 2000,
    });
  };

  return (
    <div className="text-center my-4">
      <Button variant="dark" className="w-100" onClick={handleAttendJamClick}>
        Attend Jam
      </Button>
    </div>
  );
};

export default AttendJamButton;
