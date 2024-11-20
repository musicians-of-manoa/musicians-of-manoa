'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, Form, Container } from 'react-bootstrap';

const MusicalTastesPage = () => {
  const router = useRouter();

  const musicalTastesOptions = [
    'Jazz',
    'Classical',
    'Electronic',
    'Country',
    'Folk',
    'Reggae',
    'R&B',
  ];

  // State to store selected tastes
  const [selectedTastes, setSelectedTastes] = useState<string[]>([]);

  // Handle checkbox change using explicit logic
  const handleCheckboxChange = (taste: string) => {
    if (selectedTastes.includes(taste)) {
      // If the taste is already selected, remove it
      setSelectedTastes((prev) => prev.filter((t) => t !== taste));
    } else {
      // If the taste is not selected, add it
      setSelectedTastes((prev) => [...prev, taste]);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // Save selected tastes to localStorage
    localStorage.setItem(
      'selectedMusicalTastes',
      JSON.stringify(selectedTastes),
    );
    // Redirect back to the Sign-Up page
    router.push('/auth/signup');
  };

  return (
    <main>
      <h1 className="text-center">Select Musical Tastes</h1>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              {musicalTastesOptions.map((taste) => (
                <Form.Check
                  key={taste}
                  type="checkbox"
                  label={taste}
                  checked={selectedTastes.includes(taste)}
                  onChange={() => handleCheckboxChange(taste)}
                />
              ))}
              <Button
                variant="primary"
                className="mt-3"
                onClick={handleSubmit}
                disabled={selectedTastes.length === 0}
              >
                Save and Return
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
};

export default MusicalTastesPage;
