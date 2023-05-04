import React from 'react'

const Table = () => {
  return (
    <div>
        <div className="mb-3"><label htmlFor="" className="form-label"></label>
            <select name="" id="" className="form-select">
                <option selected value="all">All categories</option>
                <option selected value="groceries">Groceries</option>
            </select>
        </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope='col'>Description</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Category</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table