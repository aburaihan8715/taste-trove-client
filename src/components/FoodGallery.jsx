const styleGridContainer = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
  gridAutoFlow: "dense",
  backGroundColor: "red",
};

const styleHorizontal = {
  gridColumn: "auto / span 2",
};
const styleVertical = {
  gridRow: "auto / span 2",
};

const FoodGallery = () => {
  return (
    <section className="py-10">
      <div className="border p-5">
        <h2 className="text-4xl text-center uppercase mb-10 mt-5">
          <span>food </span>
          <span className="text-orange-700">gallery</span>{" "}
        </h2>
        <div style={styleGridContainer} className="">
          <img className="w-full h-full object-cover" src="https://i.ibb.co/7R2pkJK/food-landscape-1.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/m62ShCd/food-landscape-8.jpg" alt="gallery" />

          <img style={styleVertical} className="w-full h-full object-cover" src="https://i.ibb.co/VgT4TTN/food-portrait-1.jpg" alt="gallery" />

          <img style={styleVertical} className="w-full h-full object-cover" src="https://i.ibb.co/VgT4TTN/food-portrait-1.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/db8qdSJ/food-landscape-2.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/db8qdSJ/food-landscape-2.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/mc2wHVf/food-portrait-2.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/LxccvMg/food-landscape-3.jpg" alt="gallery" />

          <img style={styleHorizontal} className="w-full h-full object-cover" src="https://i.ibb.co/nrcr1JV/food-landscape-5.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/LxccvMg/food-landscape-3.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/Tq7rzPG/food-portrait-3.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/Kxg3FZY/food-landscape-4.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/Kxg3FZY/food-landscape-4.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/TgtcjHd/food-portrait-4.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/sJdkmtq/food-portrait-5.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/5nSx72g/food-portrait-6.jpg" alt="gallery" />

          <img style={styleHorizontal} className="w-full h-full object-cover" src="https://i.ibb.co/nrcr1JV/food-landscape-5.jpg" alt="gallery" />

          <img style={styleHorizontal} className="w-full h-full object-cover" src="https://i.ibb.co/nrcr1JV/food-landscape-5.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/5nSx72g/food-portrait-6.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/h84FhNm/food-landscape-7.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/Kxg3FZY/food-landscape-4.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/h84FhNm/food-landscape-7.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/m62ShCd/food-landscape-8.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/m62ShCd/food-landscape-8.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/7R2pkJK/food-landscape-1.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/m62ShCd/food-landscape-8.jpg" alt="gallery" />

          <img className="w-full h-full object-cover" src="https://i.ibb.co/JF4tyfX/food-landscape-9.jpg" alt="gallery" />
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;

// =========end========
