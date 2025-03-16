import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ results, onClick }) => {
  return (
    <ul>
      {results.map(result => {
        return (
          <li key={result.id} onClick={() => onClick(result)}>
            <ImageCard result={result} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
