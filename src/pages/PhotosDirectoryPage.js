import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PhotoDetail from '../features/photos/PhotoDetail';
import PhotosList from '../features/photos/PhotosList';
import { selectPhotoById } from '../features/photos/photosSlice';

const PhotosDirectoryPage = () => {
    const [photoId, setPhotoId] = useState(0)
    const selectedPhoto = selectPhotoById(photoId)

    return (
        <Container>
            <Row>
                <Col sm= '5' md='7'>
                    <PhotosList setPhotoId={setPhotoId} />
                </Col>
                <Col sm= '7' md='5'>
                    <PhotoDetail  photo={selectedPhoto} />
                </Col>
            </Row>
        </Container>
    )
};

export default PhotosDirectoryPage;