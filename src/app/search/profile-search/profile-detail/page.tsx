import { Container } from 'react-bootstrap';
import PersonalProfile from '@/components/PersonalProfile';

const ProfileDetailPage = async () => (
  <main>
    <Container>
      <h2 className="text-center py-2" style={{ fontFamily: 'Arial' }}>
        <strong>Profile</strong>
      </h2>
    </Container>
    <Container>
      <PersonalProfile />
    </Container>
  </main>
);

export default ProfileDetailPage;
