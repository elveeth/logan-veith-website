import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByPhotoId = (photoId) => {
    return COMMENTS.filter((comment) => comment.photoId === parseInt(photoId)) 
};