
import Bruchetta from "./images/bruchetta.png"
import GreekSalad from "./images/greek-salad.jpg"
import LemonDessert from "./images/dessert.jpg"

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 18.99,
    image: GreekSalad,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 10.99,
    image: Bruchetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 8.99,
    image: LemonDessert,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },

];

export default recipes;