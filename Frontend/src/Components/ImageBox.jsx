

const ImageBox = ({ imageUrl, altText }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={altText} className="w-full h-auto" />
    </div>
  );
};

export default ImageBox;