import "./filter-modal.css";
import closeButton from "./../assets/images/close-button.png";
import flameIcon from "./../assets/images/flame.png";

export function FilterModal({ handleClose }) {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row" style={{ flex: 1 }}>
          <div className="search-filter-text" style={{ flex: 1 }}>
            Search filters
          </div>
          <div
            style={{ flex: 1 }}
            onClick={() => handleClose()}
            className="d-flex close-icon align-items-end justify-content-end"
          >
            <img src={closeButton} alt="close" />
          </div>
        </div>
        <div className="sort-by-text" style={{ flex: 1 }}>
          Sort By
        </div>
        <div className="d-flex flex-row" style={{ flex: 1 }}>
          <div>
            <img src={flameIcon} alt="flameIcon" className="flame-icon" />
          </div>
          <div className="d-flex open-text align-items-center justify-content-center">
            open
          </div>
        </div>
        <div style={{ flex: 1 }} className="cuisine">
          Cuisine
        </div>
      </div>
    </>
  );
}
