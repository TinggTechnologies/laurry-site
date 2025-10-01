function Button({ text, click }) {
    return (
      <button className="portfolio-button" onClick={click}>
        {text}
        <span className="button-shine"></span>
      </button>
    );
  }

  export default Button;
