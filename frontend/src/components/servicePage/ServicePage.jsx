import React, { useState } from "react";
import Modal from "react-modal";
import "./ServicePage.scss";

function ServicePage({ id,title, subtitle, desc, img_before_url, img_after_url }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null); // Reset modal image when closing
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % modalImage.length
        : (currentImageIndex - 1 + modalImage.length) % modalImage.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="main_card">
      {id % 2 === 0 ? (
        <div className={`card two-columns`}>
          <div className="card_imgs">
            <div className="card_imgs-item" onClick={() => openModal(img_before_url)}>
              <span className="card_imgs-item--caption">Before</span>
              <img className="card_imgs-item--img" src={img_before_url} alt="before" />
            </div>
            <div className="card_imgs-item" onClick={() => openModal(img_after_url)}>
              <span className="card_imgs-item--caption">After</span>
              <img className="card_imgs-item--img" src={img_after_url} alt="after" />
            </div>
          </div>
          <div className="card_info">
            <h2 className="service-title">{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p className="card_desc">{desc}</p>
          </div>
        </div>
      ) : (
        <div className={`card two-columns-reverse`}>
          <div className="card_info">
            <h2 className="service-title">{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p className="card_desc">{desc}</p>
          </div>
          <div className="card_imgs">
            <div className="card_imgs-item" onClick={() => openModal(img_before_url)}>
              <span className="card_imgs-item--caption">Before</span>
              <img className="card_imgs-item--img" src={img_before_url} alt="before" />
            </div>
            <div className="card_imgs-item" onClick={() => openModal(img_after_url)}>
              <span className="card_imgs-item--caption">After</span>
              <img className="card_imgs-item--img" src={img_after_url} alt="after" />
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Image Modal"
      >
        <button className="modal_close_btn" onClick={closeModal}>
          X
        </button>
        {modalImage && <img className="modal_img" src={modalImage} alt="modal" />}
      </Modal>
    </div>
  );
}

export default ServicePage;
