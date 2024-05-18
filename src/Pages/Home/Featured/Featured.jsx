import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/featured.jpg";
import "../Featured/Featured.css"


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subheading={"Check it out"}
                heading={"Featured item"}
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug20, 2029</p>
                    <p className="uppercase">Where csn I get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit corporis veritatis dignissimos aspernatur nobis, a explicabo non ab omnis alias sapiente unde dolore fugiat minima maxime repellat molestiae ducimus architecto illo pariatur, incidunt ullam nemo deserunt. Corporis, eveniet eaque? Suscipit magni accusamus nisi obcaecati, perferendis culpa libero numquam error beatae?</p>
                    <button className="btn border-0 border-b-4 mt-5 btn-outline">Order now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;