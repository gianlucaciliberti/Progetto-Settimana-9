import { useState } from "react";

function CommentModal({ show, movie, comments, onClose, onAdd }) {
    const [text, setText] = useState("");
    const [rate, setRate] = useState(1);

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <h2>{movie?.Title}</h2>

                {comments.map((c) => (
                    <div key={c._id}>
                        ⭐ {c.rate} - {c.comment}
                    </div>
                ))}

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Commento"
                />

                <select value={rate} onChange={(e) => setRate(e.target.value)}>
                    {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </select>

                <button onClick={() => onAdd(text, rate)}>
                    Submit
                </button>

                <button onClick={onClose}>Close</button>

            </div>
        </div>
    );
}

export default CommentModal;