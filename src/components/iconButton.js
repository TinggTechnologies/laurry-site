function IconButton({ Icon, url }) {
    const handleClick = () => {
      if (url) {
        window.open(url, '_blank');
      }
    };
  
    return (
      <button className="icon-button" onClick={handleClick}>
        <Icon className="icon" size={28} />
      </button>
    );
  }
  
  export default IconButton;