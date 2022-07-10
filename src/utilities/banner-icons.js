import cartIcon from "../assets/images/icons/cart.png";
import clothIcon from "../assets/images/icons/cloths.png";
import jewelIcon from "../assets/images/icons/jewel.png";
import newIcon from "../assets/images/icons/new.png";
import saleIcon from "../assets/images/icons/sale.png";

const icons = [
  {
    icon: clothIcon,
    className: "top-16 left-28 w-16",
    left: true,
    duration: 0.5,
  },
  {
    icon: saleIcon,
    className: "top-12 right-60 w-20",
    duration: .5,
  },
  {
    icon: cartIcon,
    className: "bottom-12 left-40 w-20",
    left: true,
    duration: 1,
  },
  {
    icon: jewelIcon,
    className: "bottom-12 right-40 w-20",
    duration: 1,
  },
  {
    icon: newIcon,
    className: "bottom-20 left-80 w-16",
    left: true,
    duration: 0.75,
  },
];

export { icons };

