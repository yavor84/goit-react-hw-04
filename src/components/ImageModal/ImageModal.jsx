import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '10px',
    border: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
  },
};

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) {
    return;
  }
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <img src={image.urls.regular} alt={image.description} />
        <p>Decsription: {image.description}</p>
        <p>Image by: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </Modal>
    </>
  );
};

export default ImageModal;
