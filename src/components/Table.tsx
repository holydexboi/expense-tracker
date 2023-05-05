import React, { useState } from 'react'
import { z } from 'zod'


const schema = z.object({
    description: z.string(),
    amount: z.number(),
    category: z.string()
})

type FormData = z.infer<typeof schema>

interface TableProp {
    expense: FormData[],
    setExpense: (value: any)=> void
}

const Table = ({expense, setExpense}: TableProp) => {

    const sum = expense.reduce((acc, item) => 

        acc + item.amount

    , 0)
  return (
    <div>
        <div className="mb-3"><label htmlFor="" className="form-label"></label>
            <select name="" id="" className="form-select">
                <option selected value="all">All categories</option>
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
            </select>
        </div>
        {expense.length > 0 && <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope='col'>Description</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Category</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
            {expense.map(item => (
                <tr>  
                    <td>{item.description}</td>
                    <td>${item.amount}</td>
                    <td>{item.category}</td>
                    <td><button className='btn btn-outline-danger'>Delete</button></td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${sum}</td>
                </tr>
            </tfoot>
        </table>}
    </div>
  )
}

export default Table