const PopupBox = ({ item, setItem }) => {
  console.log(item);
  const url = item?.urls?.regular;

  const handleClick = () => {
    const modal = document.getElementById("popup");
    modal.style.display = "none";
    setItem(null);
  };
  return (
    <div className="lightbox show " id="popup">
      <div className="wrapper">
        <header>
          <div className="details">
            <i className="uil uil-camera"></i>
            <span>Image Preview</span>
          </div>
          <div className="buttons">
            <i className="close-icon uil uil-times" onClick={handleClick}></i>
          </div>
        </header>
        <div className="preview-img">
          <div className="img">
            <img src={url} alt="preview-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupBox;
