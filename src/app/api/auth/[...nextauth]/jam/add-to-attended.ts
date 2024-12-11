import { NextApiRequest, NextApiResponse } from 'next';

const attendedJams: any[] = []; // Replace with proper database integration

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { jamId, jamData } = req.body;

    if (!jamId || !jamData) {
      res.status(400).json({ message: 'Invalid data' });
      return;
    }

    attendedJams.push({ id: jamId, ...jamData });
    res.status(200).json({ message: 'Jam added successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
