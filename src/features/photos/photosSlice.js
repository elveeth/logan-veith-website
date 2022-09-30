import { createSlice } from '@reduxjs/toolkit';
import { PHOTOS } from '../../app/shared/PHOTOS';

const initialState = {
    photosArray: PHOTOS
};

const photosSlice = createSlice({
    name: 'photos',
    initialState
});

export const photosReducer = photosSlice.reducer;

export const selectAllPhotos = (state) => {
    return state.photos.photosArray
};

export const selectPhotoById = (id) => (state) => {
    return state.photos.photosArray.find((photo) => photo.id === parseInt(id));
};

export const selectFeaturedPhoto = (state) => {
    return state.photos.photosArray.find((photo) => photo.featured)
};