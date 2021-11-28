import { Form } from "./styles";

const Search = () => {
  return (
    <Form>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select id="month">
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
      <button>Find events</button>
    </Form>
  );
};

export default Search;
