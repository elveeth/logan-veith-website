import { Container } from 'reactstrap';
import PhotosList from '../features/photos/PhotosList';
import SubHeader from '../components/SubHeader';

const PhotosDirectoryPage = () => {

    return (
        <Container>
        <SubHeader current='Directory' />
            <PhotosList />
        </Container>
    )
};

export default PhotosDirectoryPage;