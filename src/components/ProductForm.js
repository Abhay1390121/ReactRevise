import { reduxForm, Field } from "redux-form";
import Select from "react-select";
let ProductForm= (props) =>{
    const {handleSubmit, reset, submitFormHandler} = props;
    
    const onSubmit = (values) =>{
        submitFormHandler(values);
        reset();
    }

    const Categories = [
        { value: 'electronics', label: 'Electronics' },
        { value: 'clothing', label: 'Clothing' },
        { value: 'books', label: 'Books' },
      ];
      const generateRandomId = () => {
        return Math.random().toString(20).slice(2, 8);
      };
    return(
        <form className="product-card" onSubmit={handleSubmit(onSubmit)} >
            <div className="Card-body">
                <h1>Create Product</h1>
                    <Field name="id" component="input" type="hidden" value={generateRandomId()}/>
                <div className="form-field">
                    <label htmlFor="productName">Product Name</label>
                    <Field name="productName" component="input" type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description </label>
                    <Field name="description" component="input" type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price </label>
                    <Field name="price" component="input" type="number" min={0}/>
                </div>
                <div className="form-field">
                    <label htmlFor="category">Category</label>
                    <Field
                    name="category"
                    component={({ input}) => (
                        <Select
                        options={Categories}
                        onChange={(value) => input.onChange(value)}
                        />
                    )}
                    />
                </div>
                <button className="success-button" type="submit">Add Product</button>
            </div>
        </form>
    )
}
ProductForm = reduxForm({
    form: 'productForm', // a unique identifier for this form
  })(ProductForm);
  export default ProductForm