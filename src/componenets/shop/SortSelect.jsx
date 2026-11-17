
function SortSelect({ sortOption, onSortChange }) {
  return (
    <div className="sort-select">
      <label htmlFor="sort">Sort by: </label>

      <select
        id="sort"
        value={sortOption}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
        <option value="rating">Highest Rating</option>
      </select>
    </div>
  );
}

export default SortSelect;
