// write the book component code
import styles from "./BookCard.module.css";
import PropTypes from "prop-types";

const BookCard = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <div key={book.id} className={styles.bookCard}>
          <img
            src={book.image}
            alt={book.name}
            style={{ width: "220px", height: "300px", objectFit: "cover" }}
          />
          <h3>{book.name}</h3>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author}</p>
        </div>
      ))}
    </>
  );
};

BookCard.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookCard;
