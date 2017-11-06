export const OPENWEATHERMAP_API_URL = 'https://api.openweathermap.org/data/2.5';
export const OPENWEATHERMAP_API_KEY = '1da70e9c1c50aae0675a73f4915fe473';

export const GOOGLEMAPS_API_KEY = 'AIzaSyBrXiLQPyH1nDSwB5iKtbw4rrIeHbgCkBU';
export const LESTAUBIERE_COORDINATES = { lat: 44.992392, lng: 0.598711 };

export const LESATUBIERE_API_URL = process.env.NODE_ENV === 'production' ? 'https://api.camping-lestaubiere.fr/v1' : 'http://localhost:8000/v1';
