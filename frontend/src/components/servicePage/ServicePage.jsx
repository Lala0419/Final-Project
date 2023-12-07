// ServicePageNew.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import "./ServicePage.scss";

function ServicePage({
  id,
  title,
  subtitle,
  desc,
  img_before_url,
  img_after_url,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (images) => {
    setModalImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImages([]);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % modalImages.length
        : (currentImageIndex - 1 + modalImages.length) % modalImages.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="main_card_new">
      {id % 2 === 0 ? (
        <div className={`card_new two-columns_new`}>
          <div className="card_imgs_new">
            <div
              className="card_imgs-item_new"
              onClick={() => openModal([img_before_url, img_after_url])}
            >
              <div className='card_img_container'>
                <div className="card_imgs-item--caption_new">Before</div>
                <img
                  className="card_imgs-item--img_new"
                  src={img_before_url}
                  alt="before"
                />
              </div>
              <div className='card_img_container'>
                <div className="card_imgs-item--caption_new">After</div>
                <img
                  className="card_imgs-item--img_new"
                  src={img_after_url}
                  alt="after"
                />
              </div>
            </div>
          </div>
          <div className="card_info_new">
            <h2 className="service-title_new">{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p className="card_desc_new">{desc}</p>
          </div>
        </div>
      ) : (
        <div className={`card_new two-columns-reverse_new`}>
          <div className="card_info_new">
            <h2 className="service-title_new">{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            <p className="card_desc_new">{desc}</p>
          </div>
          <div className="card_imgs_new">
            <div
              className="card_imgs-item_new_reverse"
              onClick={() => openModal([img_before_url, img_after_url])}
            >
              <div className='card_img_container'>
                <div className="card_imgs-item--caption_new">Before</div>
                <img
                  className="card_imgs-item--img_new"
                  src={img_before_url}
                  alt="before"
                />
              </div>
              <div className='card_img_container'>
                <div className="card_imgs-item--caption_new">After</div>
                <img
                  className="card_imgs-item--img_new"
                  src={img_after_url}
                  alt="after"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal_new"
        overlayClassName="overlay_new"
        contentLabel="Image Modal New"
      >
        <button className="modal_close_btn_new" onClick={closeModal}>
          X
        </button>
        {modalImages.length > 0 && (
          <div className="modal_content_new">
            <button
              className="modal_nav_btn_new modal_nav_btn_left"
              onClick={() => navigateImage("prev")}
            >
              {"<"}
            </button>
            <img
              className="modal_img_new"
              src={modalImages[currentImageIndex]}
              alt="modal"
            />
            <button
              className="modal_nav_btn_new modal_nav_btn_right"
              onClick={() => navigateImage("next")}
            >
              {">"}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ServicePage;
