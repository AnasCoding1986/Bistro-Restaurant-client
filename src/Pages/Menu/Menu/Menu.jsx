import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverBg from "../../../assets/menu/banner3.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>

            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={coverBg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle
                subheading={"Do not miss"}
                heading={"Todays offer"}
            >

            </SectionTitle>

            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessertMenu item */}
            <MenuCategory title="dessert" coverImg={dessertImg} items={dessert}></MenuCategory>

            {/* pizza item */}
            <MenuCategory title="pizza" coverImg={pizzaImg} items={pizza}></MenuCategory>

            {/* salad item */}
            <MenuCategory title="salad" coverImg={saladImg} items={salad}></MenuCategory>

            {/* soup item */}
            <MenuCategory title="soup" coverImg={soupImg} items={soup}></MenuCategory>


        </div>
    );
};

export default Menu;