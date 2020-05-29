import React, { Fragment, useState } from "react";

const Modal = ({ post }) => {
  const [description, setPost] = useState(post.post);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      console.log("working");
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${post.postid}`,
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
        Edit
      </button>

      <div class="modal" id={`id${post.id}`} onClick={() => setPost(post.post)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setPost(post.post)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className={"form-control"}
                value={description}
                onChange={(e) => setPost(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
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
