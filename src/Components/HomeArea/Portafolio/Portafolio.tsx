import { useState } from "react";
import "./Portafolio.css";
import profileSource from "../../../Assets/Images/about.png";
import { useTitle } from "../../../Utils/UseTitle";
import portafolioSource from "../../../Assets/Images/pregnant.png";


const portfolioItems = [
  { image: profileSource, text: "צילומי משפחה" },
  { image: profileSource, text: "צילומי זוגות" },
  { image: profileSource, text: "צילומי הריון" },
  { image: profileSource, text: "גיל המצווה" },
  { image: profileSource, text: "חתונות" },
  { image: profileSource, text: "צילומי ילדים" },
  { image: profileSource, text: "צילומי תדמית" },
  { image: profileSource, text: "צילומי דוגמנות" },
];

export function Portafolio() {
    useTitle("Portafolio");
    
    
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <div
        className="PortafolioBackground"
        style={{ backgroundImage: `url(${portafolioSource})` }}
      >
        <div className="Portafolio">
          {portfolioItems.map((item, index) => (
            <div
              className="portfolio-item"
              key={index}
              onClick={() => openModal(item.image)}
            >
              <div className="text-overlay">{item.text}</div>
              <img src={item.image} alt={item.text} />
            </div>
          ))}
        </div>
      </div>
  
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={currentImage!} alt="Full view" />
        </div>
      )}
    </>
  );
}  
