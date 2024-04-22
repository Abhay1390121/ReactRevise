import { reduxForm, Field} from "redux-form";
import Select from "react-select";
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


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
    const renderField = ({ input, label, type, fieldState, meta: { touched, error, warning } }) => (
        <div className="form-field">
          <label>{label}</label>
          <div className="form-field-input">
            <input {...input} placeholder={label} type={type} disabled ={fieldState}/>
            {touched && ((error && <p className="error">!{error}</p>) || (warning && <p className="warning">{warning}</p>))}
          </div>
        </div>
      )

    //custom component to render the select field.
    const renderFieldSelect = ({ input, label, fieldState, meta: { touched, error, warning } }) =>(
        <div className="form-field">
          <label>{label}</label>
            <div className="form-field-input">
              <Select {...input} 
                options={Categories}
                isDisabled = {fieldState}
                onChange={(value) => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
              />
              {touched && ((error && <p className="error">!{error}</p>) || (warning && <p className="warning">{warning}</p>))}
            </div>
        </div>
      );


let ProductForm= (props) =>{

    const {handleSubmit, reset, submitFormHandler, change, submitting, pristine,
       invalid, initialize, products, initialValues,updateProductHandler } = props;
    const [editMode, setEditMode] = useState(false);
    

    //Using useNavigate Hooks for the navigation
    const navigate = useNavigate();
    const {id} = useParams();
    
    //Using useLocation hook for accessing current URL.
    const location = useLocation();
    const isViewMode = location.pathname.includes('productInfo');

    useEffect(() =>{
      if(id){
        setEditMode(true);
        const foundProduct = products.find(item => item.id === id);
        initialize({...foundProduct})
        
      }else{
        setEditMode(false);
        initialize({...initialValues})
      }
    },[id] )

    
    const onSubmit = (values) =>{
      if(!editMode){
        submitFormHandler(values);
        reset();
        change('id', generateRandomId())
        toast.success("Product Added Successfully!")
        setTimeout(() => navigate("/product-list"), 500);
      }else{
        updateProductHandler(id, values);
        toast.success("Product Updated Successfully!")
        setTimeout(() => navigate("/product-list"), 500);
      }
      }
    
    //This function will generate random values.
    const generateRandomId = () => {
      return Math.random().toString(20).slice(2, 8);
    };


    return(
      <form className="product-card" onSubmit={handleSubmit(onSubmit)} >
            <div className="card-body">
                    {!isViewMode? <h1>{!editMode ? "Create Product" :"Update Product"}</h1>:<h1>Product Info</h1>}                    
                    <Field name="productName" 
                            component={renderField} 
                            type="text" 
                            label=" Enter Product Name" 
                            fieldState ={isViewMode}                 
                            validate={[required, whitespace, maxLength15]} 
                            />
                    <Field name="description" 
                            component={renderField} 
                            type="text" 
                            label="Enter Description"
                            fieldState ={isViewMode} 
                            validate={[required, whitespace, maxLength50]} 
                            />
                    <Field name="price" 
                            component={renderField} 
                            type="number" min={0} 
                            label="Enter Price"
                            fieldState ={isViewMode} 
                            validate={[required, minPrice ]}
                            />
                    <Field
                            name="category"
                            label="Category"
                            fieldState ={isViewMode} 
                            component={renderFieldSelect}
                            validate={[required]}
                            />
                    <div className="form-button">
                        {!isViewMode? <button className="success-button" type="submit" disabled={invalid || pristine || submitting}>
                          {!editMode ? "Add Product" : "Update Product"}
                        </button>:<></> }
                        
                    </div>
                    
            </div>
        </form>
    )
}
ProductForm = reduxForm({
    form: 'productForm', // a unique identifier for this form
  })(ProductForm);
  export default ProductForm