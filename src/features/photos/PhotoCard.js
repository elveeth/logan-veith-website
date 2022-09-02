import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const PhotoCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.photo.image}
                alt={props.photo.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.photo.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default PhotoCard;