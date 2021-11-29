import { useRef } from "react";
import { Form } from "./styles";

interface SearchProps {
  onSearch: (y: string, m: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (yearRef.current && monthRef.current) {
      const year = yearRef.current.value;
      const month = monthRef.current.value;

      onSearch(year, month);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form-controls">
        <div className="form-control">
          <label htmlFor="year">Year</label>
          <select ref={yearRef} id="year">
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="month">Month</label>
          <select ref={monthRef} defaultValue={1} id="month">
            <option value={1}>Jan</option>
            <option value={2}>Feb</option>
            <option value={3}>Mar</option>
            <option value={4}>Apr</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>Aug</option>
            <option value={9}>Sep</option>
            <option value={10}>Oct</option>
            <option value={11}>Nov</option>
            <option value={12}>Dec</option>
          </select>
        </div>
      </div>
      <button type="submit" className="form-button">
        Find events
      </button>
    </Form>
  );
};

export default Search;
