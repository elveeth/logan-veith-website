import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectPhotoById } from '../features/photos/photosSlice';
import PhotoDetail from '../features/photos/PhotoDetail';
import CommentsList from '../features/comments/CommentsList';

const PhotoDetailPage = () => {
    const { photoId } = useParams()
    const photo = selectPhotoById(photoId)

    return (
        <Container>
            <Row>
                <PhotoDetail photo={photo} />
                <CommentsList photoId={photoId} />
            </Row>
        </Container>
    )
};

export default PhotoDetailPage;