import { store } from '../store';
export type City = {
  title: string;
  lat: number;
  lng: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};
export type OfferObject = {
  id: number;
  title: string;
  price: number;
  rating: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  NumberOfPlaces: number;
  previewImage: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/:id',
}

export const enum CardCssNameList {
  citiesList = 'cities__card',
  neardPlace = 'near-places__card',
  favoritePlace = 'favorites__card',
}

export type UserReview = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: Date;
};
export const enum SortName {
  popular = 'popular',
  lowToHigh = 'lowToHigh',
  highToLow = 'highToLow',
  topRated = 'topRated',
}
export type Points = Point[];
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
