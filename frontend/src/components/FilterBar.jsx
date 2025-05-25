import { useState } from "react";

function FilterBar({ onChange }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <>
      <div className="row justify-content-center pt-4">
        <div className="col-md-6">
          <select
            name="filter"
            id="filterBar"
            className="form-select"
            value={filter}
            onChange={handleChange}
          >
            <option value="" disabled>
              Filter by Price
            </option>
            <option value="ascending">Low to High</option>
            <option value="descending">High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterBar;
