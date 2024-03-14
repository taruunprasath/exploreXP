import React, { useState, useEffect } from 'react';
import '../Styles/review.css';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const storedReviews = localStorage.getItem('storedReviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleInputChange = (e, stateSetter) => {
    stateSetter(e.target.value);
  };

  const handleAddReview = () => {
    if (newReview.trim() !== '' && name.trim() !== '' && number.trim() !== '' && email.trim() !== '') {
      const reviewObject = {
        name: name,
        number: number,
        email: email,
        review: newReview,
      };
      setReviews([...reviews, reviewObject]);
      localStorage.setItem('storedReviews', JSON.stringify([...reviews, reviewObject]));

      setNewReview('');
      setName('');
      setNumber('');
      setEmail('');
    }
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem('storedReviews', JSON.stringify(updatedReviews));
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Tourist Reviews</h2>
      <div className="review-form">
        <input
          id="input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => handleInputChange(e, setName)}
        />
        <input
          type="text"
          placeholder="Your Number"
          value={number}
          onChange={(e) => handleInputChange(e, setNumber)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <textarea
          id="textarea"
          rows="4"
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => handleInputChange(e, setNewReview)}
        ></textarea>
        <br />
        <button id="button" className="add-review-btn" onClick={handleAddReview}>
          Add Review
        </button>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <strong style={{color:"#FD3E81"}}>{review.name}</strong> - {review.review}
              {hoveredIndex === index && (
                <div className="delete-icon" onClick={() => handleDeleteReview(index)}></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;