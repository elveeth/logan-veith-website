import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const PhotoCard = ({ photo }) => {
    const { image, name } = photo;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default PhotoCard;