import PhotoCard from "./PhotoCard";
import { Col, Row } from 'reactstrap';
import { selectAllPhotos } from './photosSlice';

const PhotosList = () => {
    const photos = selectAllPhotos();

    return (
        <Row className='ms-auto'>
            {photos.map((photo) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={photo.id}
                    >
                        <PhotoCard photo={photo} />
                    </Col>

                )
            })}
        </Row>
    )
};

export default PhotosList;