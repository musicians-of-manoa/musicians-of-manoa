export interface Review {
  id: number;
  rating: number;
  comment: string;
  createdAt: Date;
  user: { username: string };
}

export interface ProfileWithReviews {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  image?: string | null;
  rating?: number | null;
  musicalGoals?: string | null;
  musicalTastes?: string | null;
  instruments?: string | null;
  experience?: string | null;
  description?: string | null;
  reviews: Review[];
}
