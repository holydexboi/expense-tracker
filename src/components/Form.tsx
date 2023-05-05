import React, { Dispatch } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
    description: z.string().min(3, {message: 'Description should be at least 3 characters'}),
    amount: z.number({invalid_type_error: 'Amount is required'}),
    category: z.string({required_error: "Category is required"}).min(1)
})

type FormData = z.infer<typeof schema>

interface FormProp {
    expense: object[],
    setExpense: (value: any) => void
}

const Form = ({expense, setExpense}: FormProp) => {

    
    const { register, handleSubmit, formState: { errors },
} = useForm<FormData>({resolver: zodResolver(schema)})

const onSubmit = (data: FormData) => setExpense([...expense, data]) 

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input {...register("description")} type="text" id="description" className="form-control" />
          {errors.description && (<p  className="text-danger">{errors.description.message}</p>)}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
        <input {...register("amount", {valueAsNumber: true})} id="amount" type="number" className="form-control" />
          {errors.amount && (<p  className="text-danger">{errors.amount.message}</p>)}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label"></label>
            <select {...register("category")}  name="" id="category" className="form-select">
                
                <option selected value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
            </select>
            {errors.category && (<p  className="text-danger">{errors.category.message}</p>)}
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
