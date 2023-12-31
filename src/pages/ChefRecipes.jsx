import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const params = useParams();
  const data = useLoaderData();
  const chefRecipes = data?.find((chefRecipe) => chefRecipe.id === params.id);
  const { image, chefName, bio, likes, numberOfRecipes, yearsOfExperience, recipes } = chefRecipes;

  return (
    <section className="py-8">
      <div className="p-2 sm:p-5 w-full sm:max-w-5xl mx-auto">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-sm rounded">
            <figure className="flex-1">
              <img loading="lazy" className="w-full h-full" src={image} alt="chef" />
            </figure>
            <div className="card-body flex-1">
              <h3 className="card-title text-gray-600">{chefName}</h3>
              <p>{bio}</p>
              <p>Likes : {likes}</p>
              <p>
                Recipes : {numberOfRecipes}
                <sup>+</sup>
              </p>
              <p>Experience : {yearsOfExperience} years</p>
            </div>
          </div>
        </div>

        <hr className="my-8" />
        <div>
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecipes;

// ========recipe item===========
const RecipeItem = ({ recipe }) => {
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike(!like);
    toast.success("Wow you have liked the recipe !", {
      position: "top-center",
    });
  };

  return (
    <div key={recipe.id} className="mb-8">
      <div className="">
        <h2 className="text-2xl capitalize font-medium text-center">{recipe?.recipeName}</h2>
        <div className="mt-8">
          <h3 className="font-semibold">🥝🍓 Ingredients :</h3>
          {recipe?.ingredients?.map((item, index) => (
            <p key={index}>
              ({index + 1}). {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div>
          <h3 className="font-semibold">👉 Cooking Steps :</h3>
          {recipe?.cookingSteps?.map((item, index) => (
            <p key={index}>
              ({index + 1}). {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center sm:justify-end mt-3">
        <div className="text-xl sm:text-2xl border p-2 space-x-2">
          <span>⭐⭐⭐⭐ : {recipe?.rating}</span>
          <div className="inline-block">
            <button key={recipe.id} onClick={likeHandler} className="" disabled={like}>
              {!like && <span>🤍</span>}
              {like && <span>🧡</span>}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
