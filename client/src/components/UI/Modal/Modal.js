import React, { Fragment, useState } from "react";

const Modal = ({ post }) => {
  const [description, setPost] = useState(post.post);

  const updateDescription = async (e) => {
    e.preventDefault();
    console.log("in update description", e);
    try {
      console.log(description);
      const body = { post: description };

      const response = await fetch(
        `http://localhost:5000/post/${post.postid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.err(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${post.postid}`}
      >
        {console.log(post.postid)}
        Edit
      </button>

      <div
        className="modal"
        id={`id${post.postid}`}
        onClick={() => setPost(post.post)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setPost(post.post)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className={"form-control"}
                value={description}
                onChange={(e) => setPost(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setPost(post.post)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
