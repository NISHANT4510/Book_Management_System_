import { useParams } from "react-router-dom";
import { Books } from "../assets/utils/mockdata";

function BookDetails() {
  const params = useParams();
  const book = Books.filter((book) => book.id == params.id);
  console.log(book);
  return (
    <>
      <h1>{`Book Detail with id ${params.id}`}</h1>
      {book.map((book) => {
        return (
          <>
            <h2>{book.title}</h2>
            <h2>{book.edition_count}</h2>
            <h2>{book.cover_edition_key}</h2>
            <h2>{book.availability}</h2>
            <img src={book.first_publish_year} alt="" />
          </>
        );
      })}
    </>
  );
}

export default BookDetails;
