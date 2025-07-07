import Layout from "../component/result";

function About({ cartItemCount }) {
  return (
    <Layout cartItemCount={cartItemCount}>
      <div className="about-container">
        {/* Decorative dots */}
        <div className="decorative-dot dot-1"></div>
        <div className="decorative-dot dot-2"></div>
        <div className="decorative-dot dot-3"></div>
        <div className="decorative-dot dot-4"></div>

        <div className="about-content">
          <div className="left-section">
            <h1 className="about-title">
              About <span className="highlight">Us</span>
            </h1>

            <div className="info-card">
              <p>
                Welcome to Finest Diners, your go-to destination for delicious
                meals delivered straight to your door! We are passionate about
                connecting food lovers with their favorite restaurants, ensuring
                you get the best flavors from your city with just a few clicks.
              </p>

              <p>
                At Finest Diners, we believe that food is more than just a
                meal—it’s an experience. Whether you're craving a quick bite, a
                gourmet feast, or a healthy option, we’ve got you covered. With
                our seamless ordering process, real-time tracking, and reliable
                delivery partners, we make sure your food reaches you fresh and
                fast.
              </p>

              <p></p>
            </div>
          </div>

          <div className="right-section">
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60"
                alt="Fresh salad bowl"
                className="food-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
