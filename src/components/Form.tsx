import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" id="description" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label"></label>
            <select name="" id="category" className="form-select">
                <option value=""></option>
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
            </select>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
