interface IReviews {
  comment: string;
}

export interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  reviews: IReviews[];
}
