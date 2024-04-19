import { reduxForm, Field} from "redux-form";
import Select from "react-select";
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";


// Validation part
    // Checking for empty field
    const required = (value) =>value? undefined : 'Required';
    const whitespace = value => !value.trim().length ? 'Please enter valid characters': undefined;
    
    // Checking length of values
    const maxLength = max => value => value && value.length > max? `Value must be 1-${max} character long`:undefined;
    const maxLength15 = maxLength(15);
    const maxLength50 = maxLength(50);

    const minValue = min => value => value && value < min? `Value must be atleast ${min}`:undefined;
    const minPrice = minValue(100);


    //Options for the select field
    const Categories = [
        { value: 'electronics', label: 'Electronics' },
        { value: 'clothing', label: 'Clothing' },
        { value: 'books', label: 'Books' },
      ];

    // Custom component to render the input field
    const renderField = ({ input, label, type, value, meta: { touched, error, warning } }) => (
        <div className="form-field">
          <label>{label}</label>
          <div className="form-field-input">
          {/* {console.log("reder field", type)} */}
            <input {...input} placeholder={label} type={type} value={value}/>
            {touched && ((error && <p className="error">!{error}</p>) || (warning && <p className="warning">{warning}</p>))}
          </div>
        </div>
      )

    //custom component to render the select field.
    const renderFieldSelect = ({ input, label, meta: { touched, error, warning } }) =>(
        <div className="form-field">
          <label>{label}</label>
            <div className="form-field-input">
              <Select {...input} 
                options={Categories}
                onChange={(value) => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
              />
              {touched && ((error && <p className="error">!{error}</p>) || (warning && <p className="warning">{warning}</p>))}
            </div>
        </div>
      );


let ProductForm= (props) =>{

    const {handleSubmit, reset, submitFormHandler, change, submitting, pristine, invalid, initialValues,products } = props;
    const [editMode, setEditMode] = useState(false);
    const [formValue, setFormValue] = useState(initialValues);
    // const {productName, description, price, category}=formValue;
    // console.log(productName);

    //Using useNavigate Hooks for the navigation
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
      if(id){
        setEditMode(true);
        const foundProduct = products.find(item => item.id === id);
        setFormValue({...foundProduct});
      }else{
        setEditMode(false);
        setFormValue({...initialValues});
      }
    },[id])

    
    const onSubmit = (values) =>{
        submitFormHandler(values);
        reset();
        change('id', generateRandomId())
        setTimeout(() => navigate("/product-list"), 200);
      }
    
    //This function will generate random values.
    const generateRandomId = () => {
      return Math.random().toString(20).slice(2, 8);
    };


    return(
      <form className="product-card" onSubmit={handleSubmit(onSubmit)} >
            <div className="card-body">
                <h1>Create Product</h1>
                    <Field name="productName" 
                            component={renderField} 
                            type="text" 
                            label="Product Name"
                            validate={[required, whitespace, maxLength15]} 
                            />
                    <Field name="description" 
                            component={renderField} 
                            type="text" 
                            label="Description"
                            validate={[required, whitespace, maxLength50]} 
                            />
                    <Field name="price" 
                            component={renderField} 
                            type="number" min={0} 
                            label="Price"
                            validate={[required, minPrice ]}
                            />
                    <Field
                            name="category"
                            label="Category"
                            component={renderFieldSelect}
                            validate={[required]}
                            />
                    <div className="form-button">
                        <button className="success-button" type="submit" disabled={invalid || pristine || submitting}>
                          {!editMode ? "Add Product" : "Update Product"}
                        </button>
                    </div>
                    
            </div>
        </form>
    )
}
ProductForm = reduxForm({
    form: 'productForm', // a unique identifier for this form
  })(ProductForm);
  export default ProductForm