import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectPhotoById } from '../features/photos/photosSlice';
import PhotoDetail from '../features/photos/PhotoDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const PhotoDetailPage = () => {
    const { photoId } = useParams()
    const photo = useSelector(selectPhotoById(photoId))
    console.log('photo:', photo)

    return (
        <Container>
            <SubHeader current={photo.name} detail={true} />
            <Row>
                <PhotoDetail photo={photo} />
                <CommentsList photoId={photoId} />
            </Row>
        </Container>
    )
};

export default PhotoDetailPage;