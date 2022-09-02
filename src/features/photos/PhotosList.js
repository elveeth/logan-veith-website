import { PHOTOS } from '../../app/shared/PHOTOS';
import PhotoCard from "./PhotoCard";
import { Col, Row } from 'reactstrap';

const PhotosList = () => {
    return (
        <Row className='ms-auto'>
            {PHOTOS.map((photo) => {
                return (
                    <Col md='5' className='m-4' key={photo.id}>
                        <PhotoCard photo={photo} />
                    </Col>

                )
            })}
        </Row>
    )
}

export default PhotosList;