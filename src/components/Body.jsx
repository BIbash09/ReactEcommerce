const MainBody = () => {
  return (
    <main className="mainBody container">
      <div className="body-content">
        <h1> Protect your eyes with our amazing products</h1>
        <p>
          we provide the best quality glasses which are also trending in recent days
        </p>

        <div className="body-button">
          <button className="first-btn">Shop me</button>
          <button className="another-btn">Category</button>
        </div>
        <div className="body-shop">
          <p>We are also available in</p>
          <div className="brand-logo">
            <img src="/images/daraz.png" alt="daraz-logo" />
            <img src="/images/kunyo.png" alt="kunyo-logo" />
          </div>
        </div>
      </div>
      <div className="body-img">
        <img src="/images/glass.png" alt="glass-image" />
      </div>
    </main>
  );
};
export default MainBody;
