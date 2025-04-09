import { useState } from "react";
import Input from "../components/Input";
import CusButton from "../components/cusButton";
import Axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";


export default function MakeProduct(){

    const [productFormData, setProductFormData] = useState({
        ProductName: '',
        Description:'',
        Category:'',
        Image:'',
        Quantity:''
    })

    const handleChange = (evt)=>{
        const {name,value} = evt.target;
        setProductFormData((prev)=>({...prev,[name]:value}))
    }

    const navigate = useNavigate()

    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        try {
            const response = await Axios.post('/api/add-product',productFormData,{
                headers : {'content-type':'application/json'}
            })

            console.log('Server Response', response.data)
        }catch(error){
            console.log(error)
        }

        navigate('/allproducts')

        setProductFormData({
            ProductName: '',
            Description:'',
            Category:'',
            Image:'',
            Quantity:''
        })
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className=" flex flex-col items-center justify-center bg-black/40 h-[70%] w-[600px] backdrop-blur-3xl rounded-2xl">
                <h1 className=' mt-5 mb-3 self- center text-5xl text-extrabold text-white'>Add New Products</h1>
                    <div className="flex flex-col items-center justify-center">
                        <form onSubmit={handleSubmit} className=' w-full '>
                            
                            <Input
                            eventHandler={handleChange}
                            name='ProductName'
                            value={productFormData.ProductName}
                            id=' ProductName'
                            label='Product'
                            labelClass='text-lg'
                            inputClass=''
                            placeholder='name of the product'
                            />

                            <div className="flex space-x-5">
                                <div className="w-1/3">
                                <label htmlFor="Description" className="text-white text-lg font-bold">Description :</label>
                                </div>
                                <div className="w-2/3">
                                    <textarea
                                    onChange={handleChange}
                                    value={productFormData.Description}
                                    name="Description" 
                                    id="Description" 
                                    cols='30' rows='4'
                                    placeholder="provide descriptions" 
                                    className="bg-white rounded-2xl"/>
                                </div>
                            </div>


                            <div className="flex items-center space-x-5 my-5">
                                <div className="w-1/3">
                                    <label htmlFor="category" className="text-white text-lg font-bold">
                                        Category :
                                    </label>
                                </div>
                                <div className="w-2/3">
                                    <select
                                    onChange={handleChange}
                                    value={productFormData.Category}
                                    className="bg-white px-10 py-2 rounded-2xl" 
                                    name="Category"
                                    id="category">
                                        <option className='font-extrabold' value="-">Choose Type</option>
                                        <option value="type1">Type 1</option>
                                        <option value="type2">Type 2</option>
                                        <option value="type3">Type 3</option>
                                        <option value="type4">Type 4</option>
                                    </select>
                                </div>
                            </div>

                            <Input
                            value={productFormData.Image}
                            name='Image'
                            id='Image'
                            type='text'
                            label='Image'
                            labelClass='text-lg'
                            inputClass=''
                            placeholder='Provide Url as of now'
                            eventHandler={handleChange}
                            />

                            <Input
                            value={productFormData.Quantity}
                            name='Quantity'
                            id='Quantity'
                            label='Quantity'
                            labelClass='text-lg'
                            inputClass=''
                            placeholder='Quatity'
                            eventHandler={handleChange}
                            />

                            <CusButton
                            text='Add Product'
                            btnClass='bg-white w-full my-2 bg-blue-700'
                            />
                    </form>
                    <NavLink className='bg-red-500 px-20 my-2 py-2 text-lg font-bold rounded-2xl text-white hover:scale-110 transition-all duration-150' to='/allproducts'> Back </NavLink>
                </div>
            </div>
        </div>
    )
}