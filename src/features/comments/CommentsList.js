import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByPhotoId } from './commentsSlice';

const CommentsList = ({ photoId }) => {
    const comments = selectCommentsByPhotoId(photoId);

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this Photo Tile yet.
        </Col>
    )
};

export default CommentsList;