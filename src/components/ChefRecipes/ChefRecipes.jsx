import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const [like, setLike] = useState(false);
  const params = useParams();
  const data = useLoaderData();
  const chefRecipes = data?.find((chefRecipe) => chefRecipe.id === params.id);
  const { image, chefName, bio, likes, numberOfRecipes, yearsOfExperience, recipes } = chefRecipes;

  const likeHandler = () => {
    setLike(!like);
    toast.success("Wow you have liked the recipe !", {
      position: "top-center",
    });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-sm rounded">
            <figure>
              <img loading="lazy" className="w-full h-full" src={image} alt="chef" />
            </figure>
            <div className="card-body">
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

              <div className=" flex justify-end">
                <div className="text-2xl border p-2 space-x-2">
                  <span>⭐⭐⭐⭐ : {recipe?.rating}</span>
                  <div className="inline-block">
                    <button onClick={likeHandler} className="" disabled={like}>
                      {!like && <span>🤍</span>}
                      {like && <span>🧡</span>}
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
