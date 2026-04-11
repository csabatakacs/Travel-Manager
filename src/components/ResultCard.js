import "./ResultCard.css";

function ResultCard({ item, onClick }) {
  return (
    <div className="resultItem" onClick={onClick}>
      <h3>{item.name}</h3>
      <p>{item.location}</p>
      <p>{item.price} RON</p>
    </div>
  );
}

export default ResultCard;