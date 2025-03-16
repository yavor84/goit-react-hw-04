const ImageCard = ({ result: { description, urls } }) => {
  return (
    <div>
      <img src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
