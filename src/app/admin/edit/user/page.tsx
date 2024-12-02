// app/admin/edit/user/page.tsx

import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

// Client-side form component (defined before usage)
const EditUserForm = ({ user }: { user: any }) => {
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`/api/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, role }),
    });

    // Redirect back to admin page
    window.location.href = '/admin';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formRole" className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

const EditUserPage = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const userId = parseInt(params.id, 10);
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    redirect('/admin');
  }

  return (
    <main>
      <Container className="py-3">
        <h1>Edit User</h1>
        <EditUserForm user={user} />
      </Container>
    </main>
  );
};

export default EditUserPage;
