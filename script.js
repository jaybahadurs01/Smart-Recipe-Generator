// ------------------------------
// Recipe Database
// ------------------------------
const recipes = [
    {name: "Tomato Pasta", ingredients: ["tomato","pasta","onion","garlic"], diet: "vegetarian", time: 20, difficulty: "easy", nutrition: {cal: 300, protein: 12}},
    {name: "Chicken Curry", ingredients: ["chicken","onion","tomato","spices"], diet: "", time: 40, difficulty: "medium", nutrition: {cal: 500, protein: 35}},
    {name: "Grilled Cheese", ingredients: ["bread","cheese","butter"], diet: "vegetarian", time: 10, difficulty: "easy", nutrition: {cal: 400, protein: 15}},
    {name: "Paneer Butter Masala", ingredients: ["paneer","tomato","butter","cream"], diet: "vegetarian", time: 35, difficulty: "medium", nutrition: {cal: 450, protein: 18}},
    {name: "Veg Salad", ingredients: ["lettuce","tomato","cucumber","carrot"], diet: "vegan", time: 10, difficulty: "easy", nutrition: {cal: 150, protein: 5}},
    {name: "Omelette", ingredients: ["egg","onion","tomato","spices"], diet: "", time: 10, difficulty: "easy", nutrition: {cal: 200, protein: 14}},
    {name: "Dal Tadka", ingredients: ["dal","onion","tomato","spices"], diet: "vegan", time: 30, difficulty: "medium", nutrition: {cal: 250, protein: 10}},
    {name: "Fried Rice", ingredients: ["rice","carrot","peas","soy sauce"], diet: "vegetarian", time: 25, difficulty: "medium", nutrition: {cal: 350, protein: 9}},
    {name: "Veg Burger", ingredients: ["bread","potato","lettuce","cheese"], diet: "vegetarian", time: 30, difficulty: "medium", nutrition: {cal: 500, protein: 15}},
    {name: "Sushi", ingredients: ["rice","fish","seaweed"], diet: "", time: 60, difficulty: "hard", nutrition: {cal: 300, protein: 20}},
    {name: "Pizza Margherita", ingredients: ["bread","cheese","tomato"], diet: "vegetarian", time: 30, difficulty: "medium", nutrition: {cal: 600, protein: 22}},
    {name: "Avocado Toast", ingredients: ["bread","avocado"], diet: "vegan", time: 5, difficulty: "easy", nutrition: {cal: 250, protein: 6}},
    {name: "Palak Paneer", ingredients: ["paneer","spinach","spices"], diet: "vegetarian", time: 30, difficulty: "medium", nutrition: {cal: 400, protein: 20}},
    {name: "Mushroom Soup", ingredients: ["mushroom","onion","cream"], diet: "vegetarian", time: 25, difficulty: "easy", nutrition: {cal: 180, protein: 7}},
    {name: "Tacos", ingredients: ["tortilla","beef","onion","cheese"], diet: "", time: 30, difficulty: "medium", nutrition: {cal: 450, protein: 25}},
    {name: "Chole Bhature", ingredients: ["chickpeas","flour","spices"], diet: "vegan", time: 45, difficulty: "hard", nutrition: {cal: 600, protein: 20}},
    {name: "Idli Sambhar", ingredients: ["rice","lentil","spices"], diet: "vegan", time: 35, difficulty: "medium", nutrition: {cal: 300, protein: 10}},
    {name: "Biryani", ingredients: ["rice","chicken","spices","onion"], diet: "", time: 60, difficulty: "hard", nutrition: {cal: 700, protein: 35}},
    {name: "Spring Rolls", ingredients: ["flour","cabbage","carrot","soy sauce"], diet: "vegan", time: 30, difficulty: "medium", nutrition: {cal: 320, protein: 8}},
    {name: "Shakshuka", ingredients: ["egg","tomato","onion","spices"], diet: "", time: 25, difficulty: "medium", nutrition: {cal: 350, protein: 18}},
    {name: "Pancakes", ingredients: ["flour","egg","milk","sugar"], diet: "", time: 20, difficulty: "easy", nutrition: {cal: 280, protein: 8}},
    {name: "Ramen", ingredients: ["noodles","egg","broth"], diet: "", time: 40, difficulty: "medium", nutrition: {cal: 450, protein: 20}},
    {name: "Stuffed Paratha", ingredients: ["flour","potato","spices"], diet: "vegetarian", time: 25, difficulty: "medium", nutrition: {cal: 400, protein: 12}},
    {name: "Fruit Smoothie", ingredients: ["milk","banana","berries"], diet: "vegetarian", time: 5, difficulty: "easy", nutrition: {cal: 200, protein: 6}},
    {name: "Falafel Wrap", ingredients: ["chickpeas","flour","lettuce"], diet: "vegan", time: 30, difficulty: "medium", nutrition: {cal: 350, protein: 14}},
    {name: "Fish Curry", ingredients: ["fish","onion","tomato","spices"], diet: "", time: 35, difficulty: "medium", nutrition: {cal: 420, protein: 28}},
    {name: "Vegetable Stir Fry", ingredients: ["broccoli","carrot","bell pepper","soy sauce"], diet: "vegan", time: 15, difficulty: "easy", nutrition: {cal: 200, protein: 7}},
    {name: "Kebab", ingredients: ["chicken","spices","onion"], diet: "", time: 30, difficulty: "medium", nutrition: {cal: 380, protein: 25}},
    {name: "Rajma Chawal", ingredients: ["rajma","rice","spices"], diet: "vegan", time: 45, difficulty: "medium", nutrition: {cal: 500, protein: 18}},
    {name: "Pav Bhaji", ingredients: ["bread","potato","peas","butter"], diet: "vegetarian", time: 30, difficulty: "medium", nutrition: {cal: 450, protein: 10}},
    {name: "Manchurian", ingredients: ["cabbage","carrot","flour","soy sauce"], diet: "vegan", time: 40, difficulty: "medium", nutrition: {cal: 400, protein: 9}},
    {name: "Gnocchi", ingredients: ["potato","flour","cheese"], diet: "vegetarian", time: 35, difficulty: "medium", nutrition: {cal: 360, protein: 12}},
    {name: "Shepherd's Pie", ingredients: ["potato","beef","onion","peas"], diet: "", time: 50, difficulty: "hard", nutrition: {cal: 600, protein: 30}},
    {name: "Momo", ingredients: ["flour","chicken","cabbage","spices"], diet: "", time: 40, difficulty: "medium", nutrition: {cal: 300, protein: 15}},
    {name: "Khichdi", ingredients: ["rice","dal","spices"], diet: "vegan", time: 25, difficulty: "easy", nutrition: {cal: 280, protein: 9}},
    {name: "Pesto Pasta", ingredients: ["pasta","basil","cheese"], diet: "vegetarian", time: 20, difficulty: "easy", nutrition: {cal: 350, protein: 11}},
    {name: "Quinoa Salad", ingredients: ["quinoa","tomato","cucumber","lemon"], diet: "vegan", time: 15, difficulty: "easy", nutrition: {cal: 220, protein: 8}},
    {name: "Kheer", ingredients: ["rice","milk","sugar"], diet: "vegetarian", time: 40, difficulty: "medium", nutrition: {cal: 250, protein: 6}},
    {name: "Brownie", ingredients: ["flour","cocoa","sugar","butter"], diet: "vegetarian", time: 45, difficulty: "medium", nutrition: {cal: 400, protein: 5}},
    {name: "Hot Chocolate", ingredients: ["milk","cocoa","sugar"], diet: "vegetarian", time: 10, difficulty: "easy", nutrition: {cal: 180, protein: 4}}
  ];
  



  // Recipe Database (same as before)

  
  const inputEl = document.getElementById("ingredientsInput");
  const generateBtn = document.getElementById("generateBtn");
  const randomBtn = document.getElementById("randomBtn");
  const clearBtn = document.getElementById("clearBtn");
  const recipesContainer = document.getElementById("recipesContainer");
  const dietFilter = document.getElementById("dietFilter");
  const timeFilter = document.getElementById("timeFilter");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const favoritesContainer = document.getElementById("favoritesContainer");
  const ingredientBtns = document.querySelectorAll(".ingredient-btn");
  
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  // Common ingredients buttons
  ingredientBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      inputEl.value += (inputEl.value ? ", " : "") + btn.textContent;
    });
  });
  
  // Generate recipes
  generateBtn.addEventListener("click", () => {
    applyFilters();
  });
  
  // Random Recipe
  randomBtn.addEventListener("click", () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    renderRecipes([random], recipesContainer);
  });
  
  // Clear Filters
  clearBtn.addEventListener("click", () => {
    inputEl.value = "";
    dietFilter.value = "";
    timeFilter.value = "";
    searchInput.value = "";
    sortSelect.value = "";
    renderRecipes(recipes, recipesContainer);
  });
  
  // Search by name
  searchInput.addEventListener("input", () => {
    applyFilters();
  });
  
  // Sort select
  sortSelect.addEventListener("change", () => {
    applyFilters();
  });
  
  // Favorite toggle
  function toggleFavorite(recipeName) {
    if(favorites.includes(recipeName)){
      favorites = favorites.filter(f => f !== recipeName);
    } else {
      favorites.push(recipeName);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
    applyFilters();
  }
  
  // Apply all filters
  function applyFilters() {
    const inputIngredients = inputEl.value.toLowerCase().split(",").map(i => i.trim()).filter(i=>i);
    const selectedDiet = dietFilter.value;
    const selectedTime = timeFilter.value ? parseInt(timeFilter.value) : null;
    const searchQuery = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;
  
    let matched = recipes.filter(r =>
      (!inputIngredients.length || inputIngredients.some(i => r.ingredients.includes(i))) &&
      (!selectedDiet || r.diet === selectedDiet) &&
      (!selectedTime || r.time <= selectedTime) &&
      (!searchQuery || r.name.toLowerCase().includes(searchQuery))
    );
  
    // Sorting
    if(sortBy === "time") matched.sort((a,b) => a.time - b.time);
    if(sortBy === "difficulty") matched.sort((a,b) => a.difficulty.localeCompare(b.difficulty));
    if(sortBy === "calories") matched.sort((a,b) => a.nutrition.cal - b.nutrition.cal);
  
    renderRecipes(matched, recipesContainer);
  }
  
  // Render Recipes
  function renderRecipes(list, container) {
    container.innerHTML = "";
    if(!list.length){
      container.innerHTML = "<p>No recipes found. Try different ingredients or filters.</p>";
      return;
    }
  
    list.forEach(r => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <button class="favorite-btn" onclick="toggleFavorite('${r.name}')">
          ${favorites.includes(r.name) ? "❤️" : "🤍"}
        </button>
        <h3>${r.name}</h3>
        <p><strong>Ingredients:</strong> ${r.ingredients.join(", ")}</p>
        <p><strong>Cooking Time:</strong> ${r.time} min</p>
        <p><strong>Nutrition:</strong> ${r.nutrition.cal} cal | ${r.nutrition.protein}g protein</p>
        <p><strong>Diet:</strong> ${r.diet || "Non-Veg"} | Difficulty: ${r.difficulty}</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Render Favorites
  function renderFavorites(){
    const favList = recipes.filter(r => favorites.includes(r.name));
    renderRecipes(favList, favoritesContainer);
  }
  
  // Init
  renderRecipes(recipes, recipesContainer);
  renderFavorites();
  