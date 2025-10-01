function IconButton({ Icon, link }) {
    const handleClick = () => {
      if (link) {
        window.open(link, '_blank');
      }
    };
  
    return (
      <button className="icon-button" onClick={handleClick}>
        <Icon className="icon" size={28} />
      </button>
    );
  }
  
  export default IconButton;