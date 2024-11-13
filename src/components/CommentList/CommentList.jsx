import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return comments.length === 0 ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    <div className="CommentList">
      {comments.map(comment => {
        return (
          <div className="CommentInfo" key={comment.id}>
            <CommentInfo comment={comment} />
          </div>
        );
      })}
    </div>
  );
};
