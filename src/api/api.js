import axios from 'axios';
import defaultImage from '../assets/default-image.png';

const API_URL = 'https://api.artic.edu/api/v1/artworks';

const fetchImage = (imageId) => {
  return imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : defaultImage;
};

export const getAllData = async (page = 1, limit = 30) => {
  try {
    const res = await axios.get(`${API_URL}?fields=id,image_id,title,artist_title,theme_titles&page=${page}&limit=${limit}`);
    return {
      artworks: res.data.data.map((art) => ({
        id: art.id,
        imageUrl: fetchImage(art.image_id),
        title: art.title || 'Untitled',
        artist: art.artist_title || '--',
        themes: art.theme_titles || [],
      })),
      pagination: res.data.pagination, // Return pagination data
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const searchData = async (query, page = 1, limit = 4) => {
  try {
    const res = await axios.get(`${API_URL}/search?q=${query}&fields=id,image_id,title,artist_title,theme_titles&page=${page}&limit=${limit}`);
    return {
      artworks: res.data.data.map((art) => ({
        id: art.id,
        imageUrl: fetchImage(art.image_id),
        title: art.title || 'Untitled',
        artist: art.artist_title || '--',
        themes: art.theme_titles || [],
      })),
      pagination: res.data.pagination,
    };
  } catch (error) {
    console.error('Error searching data:', error);
    throw error;
  }
};
