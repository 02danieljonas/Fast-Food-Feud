import { Chip } from "../../components/Chip/Chip.jsx";

export const CategoriesColumn = ({ categories, category, categoryClick,  }) => {
    return (
        <div className="CategoriesColumn col">
            <div className="categories options">
                <h2 className="title">Categories</h2>
                {categories.map((elem, i) => (
                    <Chip
                        key={i}
                        label={elem}
                        isActive={elem === category}
                        onClick={() => categoryClick(elem)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesColumn
