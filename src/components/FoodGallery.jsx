/*

      .images_box {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        grid-auto-flow: dense;
      }

      .images_box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s;
      }

      .images_box img:hover {
        opacity: 0.5;
      }

      .big {
        grid-column: auto / span 3;
      }
      .horizontal {
        grid-column: auto / span 2;
      }
      .vertical {
        grid-row: auto / span 2;
      }

      .squire {
        grid-column: auto / span 1;
      }
*/

const styleGridContainer = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
  gridAutoFlow: "dense",
  backGroundColor: "red",
};

const styleBig = {
  gridColumn: "auto / span 3",
};
const styleHorizontal = {
  gridColumn: "auto / span 4",
};
const styleVertical = {
  gridRow: "auto / span 2",
};
const styleSquire = {
  gridColumn: "auto / span 1",
};
const FoodGallery = () => {
  return (
    <section className="mb-10">
      <div className="border sm:max-w-5xl mx-auto">
        <h2 className="text-4xl text-center uppercase mb-10 mt-5">
          <span>food </span>
          <span className="text-orange-700">gallery</span>{" "}
        </h2>
        <div style={styleGridContainer}>
          <div style={styleBig}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/7R2pkJK/food-landscape-1.jpg" alt="gallery" />
          </div>

          <div style={styleVertical}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/VgT4TTN/food-portrait-1.jpg" alt="gallery" />
          </div>

          <div style={styleSquire}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/db8qdSJ/food-landscape-2.jpg" alt="gallery" />
          </div>

          <div style={styleBig}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/mc2wHVf/food-portrait-2.jpg" alt="gallery" />
          </div>

          <div style={styleHorizontal}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/LxccvMg/food-landscape-3.jpg" alt="gallery" />
          </div>

          <div style={styleSquire}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/Tq7rzPG/food-portrait-3.jpg" alt="gallery" />
          </div>

          <div style={styleSquire}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/Kxg3FZY/food-landscape-4.jpg" alt="gallery" />
          </div>

          <div style={styleSquire}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/TgtcjHd/food-portrait-4.jpg" alt="gallery" />
          </div>

          <div style={styleSquire}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/sJdkmtq/food-portrait-5.jpg" alt="gallery" />
          </div>

          <div style={styleBig}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/5nSx72g/food-portrait-6.jpg" alt="gallery" />
          </div>

          <div style={styleVertical}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/nrcr1JV/food-landscape-5.jpg" alt="gallery" />
          </div>

          <div style={styleHorizontal}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/5nSx72g/food-portrait-6.jpg" alt="gallery" />
          </div>

          <div style={styleSquire}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/h84FhNm/food-landscape-7.jpg" alt="gallery" />
          </div>

          <div style={styleHorizontal}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/m62ShCd/food-landscape-8.jpg" alt="gallery" />
          </div>

          <div style={styleBig}>
            <img className="w-full h-full object-cover" src="https://i.ibb.co/JF4tyfX/food-landscape-9.jpg" alt="gallery" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
