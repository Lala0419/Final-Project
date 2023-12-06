import React, { useState } from "react";
import Modal from "react-modal";
import "./ServicePage.scss";

function ServicePage({ title, subtitle, desc, img_before_url, img_after_url }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null); // Reset modal image when closing
  };

  return (
    <div className={`card two-columns`}>
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
