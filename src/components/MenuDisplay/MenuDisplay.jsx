import { NutritionalLabel } from "../../components/NutritionalLabel/NutritionalLabel.jsx";
import { Chip } from "../../components/Chip/Chip.jsx";


export function MenuDisplay({
    currentMenuItems,
    selectedMenuItem,
    selectedClick,
    setSelectedMenuItem,
}) {
    return (
        <div className="MenuDisplay display">
            <div className="MenuItemButtons menu-items">
                <h2 className="title">Menu Items</h2>
                {currentMenuItems.map((elem, i) => (
                    <Chip
                        key={i}
                        isActive={elem === selectedMenuItem}
                        label={elem.item_name}
                        onClick={() => selectedClick(elem)}
                        xOnclick={() => {
                            setTimeout(() => {
                                setSelectedMenuItem(null);
                            }, 50);
                        }}
                    />
                ))}
            </div>

            {/* NUTRITION FACTS */}
            <div className="NutritionFacts nutrition-facts">
                {selectedMenuItem ? (
                    <NutritionalLabel item={selectedMenuItem} />
                ) : (
                    <></>
                )}
                {/* <NutritionalLabel /> */}
            </div>
        </div>
    );
};

export default MenuDisplay
