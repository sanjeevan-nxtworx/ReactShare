import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HeaderComponent";
import Headline from "./Components/HeadlineComponent";
import ItemDetail from "./Components/DetailComponent";
import { useState } from "react";
import DisplayItemList from "./Components/DisplayItemList";

function App() {
  const [indexVal, setIndex] = useState(0);
  const [nutArray, setNutArray] = useState([
    {
      ID: 167684,
      Name: "Creamy Dressing Made With Sour Cream And/or Buttermilk And Oil Reduced Calorie",
      FoodGroup: "Fats and Oils",
      Desc: "Creamy buttermilk dressing is a smooth, tangy, and versatile salad dressing made with buttermilk, mayonnaise, and sour cream or yogurt. Its rich, velvety texture balances the sharpness of herbs like chives, dill, and parsley, often paired with a hint of garlic or lemon juice for added zest. The dressing has a refreshing tang, thanks to the buttermilk, making it perfect for drizzling over salads, dipping veggies, or even marinating chicken. It complements both fresh greens and hearty dishes. This classic favorite combines simplicity with a burst of creamy, savory flavor.",
      Calories: 160,
      Fat: 14,
      Protein: 1.5,
      Carbohydrate: 7,
      Sugars: 5.65,
      Fiber: 0,
      Cholesterol: 0,
      SaturatedFats: 2.115,
      Image: "CreamyDressing.jpg",
      Hide: false,
    },
    {
      ID: 167687,
      Name: "Whipped Topping Frozen Low Fat",
      FoodGroup: "Dairy and Egg Products",
      Desc: "Low-fat whipped topping is a light and airy dessert topping that delivers a creamy texture with reduced fat content. Made with ingredients like skim milk or fat-free cream, it offers a healthier alternative to traditional whipped cream while maintaining its sweet, fluffy appeal. Perfect for garnishing pies, puddings, fruit, and beverages, it adds a touch of indulgence without the guilt. Its smooth consistency and mild sweetness make it versatile for both everyday treats and special occasions. Enjoy the same satisfying whipped cream experience with fewer calories and fat.",
      Calories: 224,
      Fat: 13.1,
      Protein: 3,
      Carbohydrate: 23.6,
      Sugars: 23.6,
      Fiber: 0,
      Cholesterol: 2,
      SaturatedFats: 11.273,
      Image: "WhippedTopping.jpg",
      Hide: false,
    },
    {
      ID: 167688,
      Name: "Cream Substitute Powdered Light",
      FoodGroup: "Dairy and Egg Products",
      Desc: "A cream substitute is a versatile alternative to traditional heavy cream, offering similar richness and texture with lower fat or dairy-free options. Common substitutes include ingredients like evaporated milk, Greek yogurt, coconut cream, or plant-based creams made from almonds, oats, or soy. It works well in recipes for soups, sauces, desserts, and coffee, providing a creamy consistency without compromising flavor. Ideal for those with dietary restrictions or looking to reduce calories, it delivers a lighter yet satisfying result. Cream substitutes are a practical, customizable solution for both cooking and baking needs.",
      Calories: 431,
      Fat: 15.7,
      Protein: 1.9,
      Carbohydrate: 73.4,
      Sugars: 73.4,
      Fiber: 0,
      Cholesterol: 0,
      SaturatedFats: 3.8,
      Image: "CreamSubstitute.jpg",
    },
    {
      ID: 167691,
      Name: "Vegetable Oil-Butter Spread Reduced Calorie",
      FoodGroup: "Fats and Oils",
      Desc: "Vegetable oil is a light, neutral-tasting cooking oil derived from plant sources such as soybeans, sunflowers, canola, or corn. It has a high smoke point, making it ideal for frying, sautéing, baking, and roasting without altering the flavor of dishes. Rich in unsaturated fats, it can be a heart-healthy option when used in moderation. Its versatility and affordability make it a staple in both home kitchens and commercial food preparation. Vegetable oil is essential for creating moist baked goods, crispy fried foods, and flavorful dressings or marinades.",
      Calories: 465,
      Fat: 53,
      Protein: 0,
      Carbohydrate: 0,
      Sugars: 0,
      Fiber: 0,
      Cholesterol: 54,
      SaturatedFats: 17.88,
      Image: "VegetableOilSubstitute.jpg",
    },
    {
      ID: 167692,
      Name: "Salad Dressing Blue Or Roquefort Cheese Dressing Light",
      FoodGroup: "Fats and Oils",
      Desc: "Blue salad dressing, often known as blue cheese dressing, is a creamy, tangy condiment made with blue cheese, mayonnaise, buttermilk, and a hint of vinegar or lemon juice. Its bold, savory flavor comes from the distinct sharpness of blue cheese, balanced by the smooth, rich base. Popular as a topping for salads, it also serves as a dip for wings, veggies, and chips. The dressing’s thick and velvety texture adds a luxurious touch to both light greens and hearty dishes. Loved for its unique taste, it’s a favorite among cheese enthusiasts.",
      Calories: 86,
      Fat: 2.7,
      Protein: 2.1,
      Carbohydrate: 13.2,
      Sugars: 3.6,
      Fiber: 0,
      Cholesterol: 10,
      SaturatedFats: 0.628,
      Image: "SaladDressingBlue.jpg",
    },
    {
      ID: 167693,
      Name: "Salad Dressing French Dressing Reduced Calorie",
      FoodGroup: "Fats and Oils",
      Desc: "French salad dressing is a tangy, slightly sweet vinaigrette with a smooth, emulsified texture, typically made from oil, vinegar, ketchup, and seasonings. Known for its vibrant orange-red color, it has a balanced flavor profile combining acidity, sweetness, and a hint of spice. It pairs well with crisp greens, adding a zesty kick to salads and vegetables. Often used as a marinade or drizzle, it enhances dishes with its bold, refreshing taste. French dressing is a versatile classic, loved for its bright and lively flavor.",
      Calories: 227,
      Fat: 13,
      Protein: 0.4,
      Carbohydrate: 27,
      Sugars: 25.92,
      Fiber: 0,
      Cholesterol: 0,
      SaturatedFats: 1.872,
      Image: "SaladDressingFrench.jpg",
    },
    {
      ID: 167695,
      Name: "Mayonnaise Made With Tofu",
      FoodGroup: "Fats and Oils",
      Desc: "Mayonnaise made with tofu is a creamy, plant-based alternative to traditional mayonnaise, offering a rich texture with reduced fat and cholesterol. Made from silken tofu, oil, lemon juice, and seasonings, it delivers a smooth consistency and a mild, savory flavor. This vegan-friendly option is perfect for sandwiches, salads, dips, and dressings, providing a healthier twist without sacrificing taste. High in protein and versatile, it caters to those seeking dairy-free or egg-free alternatives. Tofu mayonnaise is a nutritious, guilt-free choice for health-conscious and plant-based diets.",
      Calories: 322,
      Fat: 31.79,
      Protein: 5.95,
      Carbohydrate: 3.06,
      Sugars: 0.85,
      Fiber: 1.1,
      Cholesterol: 0,
      SaturatedFats: 2.921,
      Image: "MayonnaiseTofu.jpg",
    },
    {
      ID: 167697,
      Name: "Milk Buttermilk Fluid Cultured Reduced Fat",
      FoodGroup: "Dairy and Egg Products",
      Desc: "Buttermilk is a tangy, slightly thick dairy product traditionally left after churning butter from cultured cream. Modern buttermilk is typically made by fermenting low-fat milk with lactic acid bacteria, giving it a creamy texture and signature sour flavor. It is a versatile ingredient used in baking for tender pancakes, biscuits, and cakes, as well as in marinades and dressings. Rich in probiotics, it supports digestion while being lower in fat than cream. Buttermilk’s refreshing taste and culinary benefits make it a staple in kitchens worldwide.",
      Calories: 56,
      Fat: 2,
      Protein: 4.1,
      Carbohydrate: 5.3,
      Sugars: 5.3,
      Fiber: 0,
      Cholesterol: 8,
      SaturatedFats: 1.242,
      Image: "Buttermilk.jpg",
    },
    {
      ID: 167702,
      Name: "Flaxseed Oil",
      FoodGroup: "Fats and Oils",
      Desc: "Flaxseed oil, also known as linseed oil, is a nutrient-rich oil extracted from flaxseeds, prized for its high omega-3 fatty acid content, particularly alpha-linolenic acid (ALA). It has a mild, nutty flavor and is often used as a dietary supplement or in salad dressings, smoothies, and dips. Known for its anti-inflammatory properties, it supports heart health, skin hydration, and overall well-being. Flaxseed oil is not suitable for high-heat cooking but works well in cold dishes. It’s a popular choice for those seeking plant-based, heart-healthy fats.",
      Calories: 884,
      Fat: 99.98,
      Protein: 0.11,
      Carbohydrate: 0,
      Sugars: 0,
      Fiber: 0,
      Cholesterol: 0,
      SaturatedFats: 8.976,
      Image: "FlaxseedOil.jpg",
    },
    {
      ID: 167705,
      Name: "Grated Parmesan Cheese (Low-Sodium)",
      FoodGroup: "Dairy and Egg Products",
      Desc: "Parmesan cheese, or Parmigiano-Reggiano, is a hard, aged Italian cheese known for its rich, nutty, and savory flavor. Made from cow's milk and aged for at least 12 months, it develops a firm, granular texture perfect for grating. It’s a versatile ingredient, enhancing pasta, soups, salads, and risottos with its bold, umami taste. High in protein and calcium, Parmesan is both nutritious and flavorful. Loved worldwide, it’s a staple in Italian cuisine and a favorite for finishing dishes.",
      Calories: 451,
      Fat: 29.99,
      Protein: 41.6,
      Carbohydrate: 3.7,
      Sugars: 0.85,
      Fiber: 0,
      Cholesterol: 79,
      SaturatedFats: 19.051,
      Image: "GratedParmesonCheese.jpg",
    },
    {
      ID: 167735,
      Name: "Cheese Mozzarella Low Sodium",
      FoodGroup: "Dairy and Egg Products",
      Desc: "Mozzarella cheese is a soft, mild, and stretchy cheese traditionally made from water buffalo milk, though cow’s milk is commonly used today. It has a smooth, creamy texture and a delicate, slightly tangy flavor. Known for its meltability, it’s a favorite topping for pizza, lasagna, and caprese salads. Mozzarella is often sold fresh, in balls or blocks, and is a key ingredient in many Italian dishes. It’s a versatile cheese that adds a rich, luxurious texture to both hot and cold preparations.",
      Calories: 280,
      Fat: 17.1,
      Protein: 27.5,
      Carbohydrate: 3.1,
      Sugars: 1.23,
      Fiber: 0,
      Cholesterol: 54,
      SaturatedFats: 10.867,
      Image: "MozarellaCheese.jpg",
    },
    {
      ID: 167746,
      Name: "Lemons",
      FoodGroup: "Fruits",
      Desc: "Lemons are bright yellow citrus fruits known for their tart, tangy flavor and high vitamin C content. They are commonly used to add zest and acidity to a wide variety of dishes, from savory recipes to desserts. The juice and peel are both versatile in cooking, baking, and beverages like lemonade or cocktails. Lemons also have natural cleaning and aromatic properties, making them useful beyond the kitchen. Their refreshing, tangy taste and health benefits make them a popular and essential ingredient worldwide.",
      Calories: 29,
      Fat: 0.3,
      Protein: 1.1,
      Carbohydrate: 9.32,
      Sugars: 2.5,
      Fiber: 2.8,
      Cholesterol: 0,
      SaturatedFats: 0.039,
      Image: "Lemons.jpg",
    },
    {
      ID: 167747,
      Name: "Lemon Juice Raw",
      FoodGroup: "Fruits",
      Desc: "Lemon juice is a tart, tangy liquid extracted from fresh lemons, known for its vibrant flavor and high vitamin C content. It’s commonly used to enhance the taste of both sweet and savory dishes, such as salads, marinades, and desserts. The juice adds a refreshing acidity that balances rich or greasy foods and brightens beverages like lemonade and cocktails. Besides its culinary uses, lemon juice has natural cleaning and skin-care benefits. Its versatility and sharp, refreshing taste make it a staple in kitchens around the world.",
      Calories: 22,
      Fat: 0.24,
      Protein: 0.35,
      Carbohydrate: 6.9,
      Sugars: 2.52,
      Fiber: 0.3,
      Cholesterol: 0,
      SaturatedFats: 0.04,
      Image: "LemonJuice.jpg",
    },
    {
      ID: 167750,
      Name: "Prickly Pears",
      FoodGroup: "Fruits",
      Desc: "Prickly pears are the colorful, sweet, and juicy fruits of the prickly pear cactus, also known as 'sabra' or 'tuna.' They have a vibrant, reddish or greenish skin, covered with small spines, and soft, seedy flesh that ranges from pink to deep red. The taste is mildly sweet with hints of watermelon and a slightly tart finish. Prickly pears are rich in antioxidants, vitamins, and fiber, making them a nutritious addition to smoothies, salads, or jams. Their unique flavor and texture make them a refreshing and exotic fruit enjoyed in many cuisines.",
      Calories: 41,
      Fat: 0.51,
      Protein: 0.73,
      Carbohydrate: 9.57,
      Sugars: "NULL",
      Fiber: 3.6,
      Cholesterol: 0,
      SaturatedFats: 0.067,
      Image: "PricklyPears.jpg",
    },
    {
      ID: 167751,
      Name: "Plums Dried (Prunes) Stewed Without Added Sugar",
      FoodGroup: "Fruits",
      Desc: "Prunes are dried plums, typically of the European variety, known for their sweet, rich flavor and chewy texture. They are widely recognized for their digestive health benefits, as they are high in fiber and sorbitol, which aid in relieving constipation. Prunes also provide essential nutrients like potassium, vitamin K, and antioxidants. They can be eaten as a snack, added to baked goods, or used in savory dishes for a touch of sweetness. Prunes are a nutritious, naturally sweet fruit that promotes gut health and overall wellness.",
      Calories: 107,
      Fat: 0.16,
      Protein: 0.96,
      Carbohydrate: 28.08,
      Sugars: 24.98,
      Fiber: 3.1,
      Cholesterol: 0,
      SaturatedFats: 0.01,
      Image: "Prunes.jpg",
    },
    {
      ID: 168402,
      Name: "Cooked Blackeyed Peas",
      FoodGroup: "Beans and Lentils",
      Desc: "Black-eyed peas are small, oval-shaped legumes with a creamy texture and a distinctive black spot on one side. They have a mild, earthy flavor and are often used in Southern and African-American cuisine, particularly in dishes like Hoppin' John. Rich in protein, fiber, and essential nutrients like folate and iron, they are a healthy addition to salads, stews, and casseroles. Black-eyed peas are also known for their cultural significance, often eaten on New Year's Day for good luck. Their versatility and nutritional benefits make them a popular ingredient in various cuisines worldwide.",
      Calories: 97,
      Fat: 0.38,
      Protein: 3.17,
      Carbohydrate: 20.32,
      Sugars: 3.23,
      Fiber: 5,
      Cholesterol: 0,
      SaturatedFats: 0.096,
      Image: "BlackeyedPeas.jpg",
    },
    {
      ID: 168411,
      Name: "Edamame",
      FoodGroup: "Beans and Lentils",
      Desc: "Edamame are young, green soybeans harvested before they fully ripen, commonly found in East Asian cuisine. They have a mild, slightly sweet flavor and a firm, yet tender texture when cooked. Often served steamed in their pods with a sprinkle of salt, they are a nutritious snack or appetizer. Rich in protein, fiber, vitamins, and minerals, edamame are a popular plant-based protein source. These versatile beans can also be added to salads, stir-fries, or soups for a healthy, protein-packed boost.",
      Calories: 121,
      Fat: 5.2,
      Protein: 11.91,
      Carbohydrate: 8.91,
      Sugars: 2.18,
      Fiber: 5.2,
      Cholesterol: 0,
      SaturatedFats: 0.62,
      Image: "Edamame.jpg",
    },
    {
      ID: 168574,
      Name: "Fava Beans (Raw)",
      FoodGroup: "Beans and Lentils",
      Desc: "Fava beans, also known as broad beans, are large, flat, green legumes with a slightly sweet, earthy flavor. They are typically harvested in the early stages of ripening, though they can be consumed both fresh and dried. Fava beans are rich in protein, fiber, vitamins, and minerals, making them a nutritious addition to salads, soups, stews, and casseroles. They are commonly used in Mediterranean, Middle Eastern, and North African cuisines. With their creamy texture and versatility, fava beans are a popular choice for vegetarian and plant-based dishes.",
      Calories: 88,
      Fat: 0.73,
      Protein: 7.92,
      Carbohydrate: 17.63,
      Sugars: 9.21,
      Fiber: 7.5,
      Cholesterol: 0,
      SaturatedFats: 0.118,
      Image: "FavaBeans.jpg",
    },
    {
      ID: 168867,
      Name: "Cornmeal Degermed Enriched Yellow",
      FoodGroup: "Grains and Pasta",
      Desc: "Yellow cornmeal is a finely ground flour made from dried yellow corn, commonly used in baking and cooking. It has a slightly sweet, earthy flavor and a coarse texture that adds a pleasant crunch to dishes. Yellow cornmeal is a key ingredient in cornbread, muffins, polenta, and other savory or sweet baked goods. It’s rich in carbohydrates and provides a good source of fiber, vitamins, and minerals like iron and magnesium. Its versatility and distinct flavor make it a staple in many cuisines, particularly in Southern and Latin American cooking.",
      Calories: 370,
      Fat: 1.75,
      Protein: 7.11,
      Carbohydrate: 79.45,
      Sugars: 1.61,
      Fiber: 3.9,
      Cholesterol: 0,
      SaturatedFats: 0.22,
      Image: "CornmealYellow.jpg",
    },
  ]);
  /*
  return (
    <div className="App">
      <h3>{NutritionalTable[0].Name}</h3>
      <img
        src={"./images/" + NutritionalTable[0].Image}
        alt={NutritionalTable[0].Image}
      />
      <p>{NutritionalTable[0].Desc}</p>
      <div>
        <p className="labelInfo">
          ID : <span className="dataInfo">{NutritionalTable[0].ID}</span>
        </p>
        <p className="labelInfo">
          Group :{" "}
          <span className="dataInfo">{NutritionalTable[0].FoodGroup}</span>
        </p>
        <p className="labelInfo">
          Calories :{" "}
          <span className="dataInfo">{NutritionalTable[0].Calories}</span>
        </p>
        <p className="labelInfo">
          Fat : <span className="dataInfo">{NutritionalTable[0].Fat}</span>
        </p>
        <p className="labelInfo">
          Carbohydrate :{" "}
          <span className="dataInfo">{NutritionalTable[0].Carbohydrate}</span>
        </p>
        <p className="labelInfo">
          Fiber : <span className="dataInfo">{NutritionalTable[0].Fiber}</span>
        </p>
        <p className="labelInfo">
          Cholesterol :{" "}
          <span className="dataInfo">{NutritionalTable[0].Cholesterol}</span>
        </p>
        <p className="labelInfo">
          Saturated Fats :{" "}
          <span className="dataInfo">{NutritionalTable[0].SaturatedFats}</span>
        </p>
      </div>
    </div>
  );
  */

  function HandleHideHeadline() {
    let newArr = [...nutArray];

    newArr[0].Hide = true;
    setNutArray(newArr);
    console.log("Parent Handler Called");
  }

  function HandleNext() {
    console.log("Before Next is Clicked", indexVal);
    setIndex((prevVal) => prevVal + 1);
    setIndex((prevVal) => prevVal + 1);
    console.log("Next is Clicked", indexVal);
  }

  function HandlePrevious() {
    setIndex(indexVal + 1);
    console.log("Previous is Clicked", indexVal);
  }

  function ShowHeadLine() {
    if (!nutArray[indexVal].Hide)
      return (
        <Headline
          Image={nutArray[indexVal].Image}
          Desc={nutArray[indexVal].Desc}
          HideHandler={HandleHideHeadline}
        />
      );
  }

  function HandleSelectItem(id) {
    let indx = nutArray.findIndex((item) => item.ID === id);
    setIndex(indx);
  }

  return (
    <div>
      <Header Name={nutArray[indexVal].Name} />
      <DisplayItemList ListItems={nutArray} HandleSelect={HandleSelectItem} />
      {ShowHeadLine()}
      <ItemDetail />
      <button onClick={HandleNext}>Next</button>
      <button onClick={HandlePrevious}>Prev</button>
    </div>
  );
}

export default App;
