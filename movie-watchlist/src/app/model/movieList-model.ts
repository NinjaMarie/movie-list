export interface IMovieList {
  title: string;
  genre: string;
  topNo: string;
  movieId: number;
  releasedDate: string;
  [key: string]: string | number;
}
