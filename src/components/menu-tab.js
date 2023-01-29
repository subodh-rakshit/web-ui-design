import pomoLogo from "./../assets/images/pomo-logo.png";
import houseLogo from "./../assets/images/house-logo.png";
import orders from "./../assets/images/orders.png";
import notification from "./../assets/images/notification.png";
import helpSupport from "./../assets/images/help-support.png";
import settings from "./../assets/images/settings.png";
import closeButton from "./../assets/images/close-button.png";
import clockIcon from "./../assets/images/clock-icon.png";
import upArrow from "./../assets/images/up-arrow.png";
import rightArrow from "./../assets/images/right-arrow.png";
import downArrow from "./../assets/images/down-arrow.png";

export function MenuTab() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <div className="pomo-logo-image">
            <img src={pomoLogo} alt="main-logo" />
          </div>
          <div className="pomo-and-comp">Pomo & co</div>
        </div>
        <div className="d-flex flex-row tabs home-image-outer-div">
          <div className="d-flex align-items-center home-image">
            <img src={houseLogo} alt="house" />
          </div>
          <div className="d-flex align-items-center text-font-active">Home</div>
        </div>
        <div className="d-flex flex-row tab-images-outer-div">
          <div className="d-flex align-items-center tab-image">
            <img src={orders} alt="orders" />
          </div>
          <div className="d-flex align-items-center text-font">Orders</div>
        </div>
        <div className="d-flex flex-row tab-images-outer-div">
          <div className="d-flex align-items-center tab-image">
            <img src={notification} alt="notification" />
          </div>
          <div className="d-flex align-items-center text-font">
            Notification
          </div>
          <div
            className="d-flex align-items-center justify-content-end"
            style={{ flex: 1 }}
          >
            <div className="notification-number">2</div>
          </div>
        </div>
        <div className="d-flex flex-row tab-images-outer-div">
          <div className="d-flex align-items-center tab-image">
            <img src={helpSupport} alt="helpsupport" />
          </div>
          <div className="d-flex align-items-center text-font">
            Help & Support
          </div>
        </div>
        <div className="d-flex flex-row tab-images-outer-div">
          <div className="d-flex align-items-center tab-image">
            <img src={settings} alt="settings" />
          </div>
          <div className="d-flex align-items-center text-font">Settings</div>
        </div>
      </div>

      <div className="order-details">
        <div className="d-flex flex-column align-items-end close-button">
          <img src={closeButton} alt="closeButton" />
        </div>
        <div className="d-flex flex-column align-items-center clock-icon">
          <img src={clockIcon} alt="clockIcon" />
        </div>
        <div className="d-flex flex-column align-items-center ready-order-text">
          Your Order is now Ready
        </div>
        <div className="d-flex flex-column align-items-center order-id">
          Splint Doumo
        </div>
        <div className="d-flex flex-column align-items-center order-id">
          Order Id: #ED564F
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center details">
          <div style={{ marginRight: "16px" }}>Details</div>
          <div>
            <img src={rightArrow} alt="rightarrow" />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center first-inner-div">
        &nbsp;
      </div>
      <div className="d-flex align-items-center justify-content-center second-inner-div">
        &nbsp;
      </div>
      <div className="d-flex flex-row name-and-email">
        <div
          className="d-flex flex-column justify-content-space-between"
          style={{ flex: 1 }}
        >
          <div className="ordered-name d-flex flex-wrap">Mark Clarke</div>
          <div className="d-flex flex-wrap">markclarke@gmail.com</div>
        </div>
        <div className="d-flex flex-column arrow-css">
          <div>
            <img src={upArrow} alt="up-arrow" />
          </div>
          <div>
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
