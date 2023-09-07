import { useNavigate } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, chefName, image, yearsOfExperience, numberOfRecipes, likes } = chef;
  const navigate = useNavigate();

  const viewRecipesHandler = (id) => {
    navigate(`/chefRecipes/${id}`);
  };

  return (
    <div className="card rounded shadow-md">
      <figure className="">
        <img loading="lazy" className="w-full h-40 object-cover" src={image} alt="chef" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-gray-600">{chefName}</h3>
        <div>
          Experience :<span className="badge badge-secondary">{yearsOfExperience} years</span>
        </div>
        <div>
          <span>Recipes : </span>
          <span className="badge badge-warning">
            {numberOfRecipes}
            <sup className="text-orange-600 text-sm mt-2">+</sup>
          </span>
        </div>

        <div>
          <button className="badge badge-secondary">👍 : {likes}</button>
        </div>
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
