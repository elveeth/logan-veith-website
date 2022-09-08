import { PHOTOS } from '../../app/shared/PHOTOS';

export const selectAllPhotos = () => {
    return PHOTOS
};

export const selectPhotoById = (id) => {
    return PHOTOS.find((photo) => photo.id === id)
};

// export const selectRandomPhoto = () => {
//     return PHOTOS[Math.floor(PHOTOS.length * Math.random())]
// };