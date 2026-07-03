import { useState } from "react";

function CommentModal({ show, movie, comments, onClose, onAdd }) {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);

  if (!show) return null;

  const handleSubmit = () => {
    onAdd(text, rate);
    setText("");
    setRate(1);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        {/* HEADER */}
        <div className="modal-header">
          <h2>{movie?.Title}</h2>

          <button className="close-x" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* COMMENTS */}
        <div className="comments">
          {comments.map((c) => (
            <div key={c._id} className="comment">
              ⭐ {c.rate} - {c.comment}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Scrivi un commento..."
          className="comment-input"
        />

        {/* RATING BUTTONS */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`rate-btn ${rate === n ? "active" : ""}`}
              onClick={() => setRate(n)}
            >
              {n}
            </button>
          ))}
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
}

export default CommentModal;