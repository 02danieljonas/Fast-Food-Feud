import { Chip } from "../../components/Chip/Chip.jsx";


export const RestaurantsRow = ({ rest, restaurants, restClick, setRest,  }) => {
    return (
        <div className="RestaurantsRow">
            <h2 className="title">Restaurants</h2>
            <div className="restaurants options">
                {restaurants.map((elem, i) => (
                    <Chip
                        key={elem + i}
                        label={elem}
                        isActive={elem === rest}
                        onClick={() => restClick(elem)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantsRow