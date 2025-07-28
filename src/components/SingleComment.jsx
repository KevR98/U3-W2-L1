import { Button, ListGroup } from 'react-bootstrap';

const AUT =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmFjMjc4Y2RkZjAwMTU1ZDY3OWMiLCJpYXQiOjE3NTM3MTg4NTAsImV4cCI6MTc1NDkyODQ1MH0.3PY82vAMgkx_FiBcAG5hFc811UkQouQXvVz8YKc8huA';

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: AUT,
          },
        }
      );
      if (response.ok) {
        alert('La recensione è stata elimata!');
      } else {
        throw new Error('La recensione non è stata eliminata!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant='danger'
        className='ms-2'
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
