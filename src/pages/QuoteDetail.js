import { useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFounde from "./NotFounde";
const DUMMY_QUOTES = [
  { id: "q1", author: "Omar", text: "Learning React is fun!" },
  { id: "q2", author: "Hamza", text: "Learning React is great!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <NotFounde />;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
