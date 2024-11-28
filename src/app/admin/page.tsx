// app/admin/page.tsx

import { getServerSession } from 'next-auth';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import Link from 'next/link';

const AdminPage = async () => {
  // Protect the admin page
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Fetch users from the database
  const users = await prisma.user.findMany({});

  return (
    <main>
      <Container id="admin-page" fluid className="py-3">
        {/* Page Heading */}
        <Row className="mb-4">
          <Col>
            <h1>Admin Dashboard</h1>
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row className="mb-4">
          <Col>
            <Button href="/admin/edit/experience" variant="primary" className="me-2">
              Edit Experience Levels
            </Button>
            <Button href="/admin/edit/goals" variant="primary" className="me-2">
              Edit Musical Goals
            </Button>
            <Button href="/admin/edit/tastes" variant="primary">
              Edit Musical Tastes
            </Button>
          </Col>
        </Row>

        {/* Users Table */}
        <Row>
          <Col>
            <h2>List of Users</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Edit User</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <Button
                        href={`/admin/edit/user/${user.id}`}
                        variant="secondary"
                        size="sm"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
