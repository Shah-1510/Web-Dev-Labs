const favouriteRecipe = {
    title: "Tea",
    serving: 2,
    Ingredients: ["Sugar", "Tea", "Water", "Milk"],
    recipe: function () {
      console.log(
        `${this.title}\nServes:${this.serving}\nIngredients:\n${this.Ingredients
          .map((ing) => ing).join("\n")}`        
      );
    },
  };
  favouriteRecipe.recipe();