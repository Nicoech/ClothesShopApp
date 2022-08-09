import CategoryItems from "../category-items/category-items.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
