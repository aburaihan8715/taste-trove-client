import { useNavigate } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, chefName, image, yearsOfExperience, numberOfRecipes, likes } = chef;
  const navigate = useNavigate();

  const viewRecipesHandler = (id) => {
    // console.log(id);
    navigate(`/chefRecipes/${id}`);
  };

  return (
    <div className="card rounded glass">
      <figure className="">
        <img loading="lazy" className="w-full" src={image} alt="chef" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-gray-600">{chefName}</h3>
        <p>Experience : {yearsOfExperience} years</p>
        <p>
          Recipes : {numberOfRecipes}
          <sup>+</sup>
        </p>

        <p>Likes : {likes}</p>
        <div className="card-actions justify-end">
          <button onClick={() => viewRecipesHandler(id)} className="btn btn-primary rounded text-gray-600">
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
