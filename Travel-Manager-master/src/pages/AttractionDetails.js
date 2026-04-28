import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AttractionDetails.css";

function AttractionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [attraction, setAttraction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1
  });

  useEffect(() => {
    const fetchAttraction = async () => {
      try {
        const response = await fetch("https://localhost:7087/api/Search");

        if (!response.ok) {
          throw new Error("API error");
        }

        const data = await response.json();
        const found = data.find(item => item.id === Number(id));

        setAttraction(found);
      } catch (error) {
        console.error("Eroare la incarcarea atractiei:", error);
      }
    };

    fetchAttraction();
  }, [id]);

  if (!attraction) return <p>Attraction not found.</p>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ORDER DATA:", formData);
    alert("Ticket reserved (frontend only)");
    setShowModal(false);
  };

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <h1>{attraction.name}</h1>
      <p>{attraction.location}</p>
      <p>{attraction.description}</p>
      <p>{attraction.entryPrice} RON</p>

      <button onClick={() => setShowModal(true)}>
        Buy ticket
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Buy ticket</h2>

            <form onSubmit={handleSubmit} className="form">
              <input
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="tickets"
                min="1"
                value={formData.tickets}
                onChange={handleChange}
                required
              />

              <button type="submit">
                Confirm purchase
              </button>

              <button
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttractionDetails;