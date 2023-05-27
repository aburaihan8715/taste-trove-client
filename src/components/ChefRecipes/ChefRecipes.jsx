import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipes = () => {
  const params = useParams();
  const data = useLoaderData();
  const chefRecipes = data?.find((chefRecipe) => chefRecipe.id === params.id);
  const { image, chefName, bio, likes, numberOfRecipes, yearsOfExperience, recipes } = chefRecipes;

  
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-sm rounded">
            <figure>
              <img className="w-full h-full" src={image} alt="chef" />
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
            <div className="mb-8">
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
                  <button>🧡</button>
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
