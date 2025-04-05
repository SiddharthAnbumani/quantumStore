import CusButton from "../components/cusButton";
import Axios from 'axios';
import { useState, useEffect } from "react";
import Input from "../components/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const [productData, setProductData] = useState({
    ProductName: '',
    Description: '',
    Category: '',
    Image: '',
    Quantity: '',
    InStock: '',
  });

  const {productId} = useParams()


  // Fetch The Previous Product Data
  const fetchProductData = async () => {
    try {
      const response = await Axios.get(`/api/fetch-edit-product/${productId}`, {
        timeout: 5000
      });
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductData();
    }
  }, [productId]);

  useEffect(() => {
    console.log('State Updated:', productData);
  }, [productData]);

    const navigate = useNavigate()

  // Make the Put Request as handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(`/api/edit-product/${productId}`, productData, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000
      });
      console.log('Response:', response.data);
      console.log('Product Updated')
      navigate('/allproducts');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Handle Input Changes
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async(evt)=>{
    try{
        const response = await Axios.delete(`/api/delete-product/${productId}`)
        console.log('Response :', response.data)
    } catch(error){
        console.log('Error :',error)
    }
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-7xl'>Edit Product</h1>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className='w-full'>
          <Input
            eventHandler={handleChange}
            name='ProductName'
            value={productData.ProductName}
            id='ProductName'
            label='Product Name'
            labelClass='text-lg'
            inputClass=''
            placeholder='Name of the product'
          />

          <div className="flex space-x-5">
            <div className="w-1/3">
              <label htmlFor="Description" className="text-lg font-bold">Description :</label>
            </div>
            <div className="w-2/3">
              <textarea
                onChange={handleChange}
                value={productData.Description}
                name="Description"
                id="Description"
                cols='30'
                rows='4'
                placeholder="Provide descriptions"
                className="bg-white rounded-2xl"
              />
            </div>
          </div>

          <div className="flex items-center space-x-5 my-5">
            <div className="w-1/3">
              <label htmlFor="category" className="text-lg font-bold">Category :</label>
            </div>
            <div className="w-2/3">
              <select
                onChange={handleChange}
                value={productData.Category}
                className="bg-white px-10 py-2 rounded-2xl"
                name="Category"
                id="category"
              >
                <option value="-">Choose Type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
                <option value="type4">Type 4</option>
              </select>
            </div>
          </div>

          <Input
            value={productData.Image}
            name='Image'
            id='Image'
            type='text'
            label='Image URL'
            labelClass='text-lg'
            inputClass=''
            placeholder='Provide URL'
            eventHandler={handleChange}
          />

          <Input
            value={productData.Quantity}
            name='Quantity'
            id='Quantity'
            type='number'
            label='Quantity'
            labelClass='text-lg'
            inputClass=''
            placeholder='Quantity'
            eventHandler={handleChange}
          />

          <CusButton
            text='Update Product'
            btnClass='bg-yellow-500 w-full text-white my-3'
            type='submit'
          />
          <CusButton
            text='Delete Product'
            btnClass='bg-red-600 w-full text-white my-3'
            onClick={handleDelete}
          />

          <NavLink 
          className='px-10 py-2 bg-blue-700 font-bold text-white text-lg
           rounded-xl hover:scale-110 transition-all duration-150' 
           to={`/allproducts/${productId}`}>
            Back to Product 
           </NavLink>

        </form>
      </div>
    </div>
  );
}


// OLD VERSION
// import { FaHandFist } from "react-icons/fa6";
// import CusButton from "../components/cusButton";
// import Axios from 'axios'
// import { useState,useEffect } from "react";
// import Input from "../components/Input";



// export default function EditProduct(){
   
//     const [productData, setProductData] = useState({
//         ProductName: '',
//         Description: '',
//         Category: '',
//         Image: '',
//         Quantity: '',
//         InStock: '',
//     })
//     const [editedProductData, setEditedProductData] = useState({
//         ProductName: '',
//         Description: '',
//         Category: '',
//         Image: '',
//         Quantity: '',
//         InStock: '',
//     })
    

//     const productId = '67e8b61149febfa85d9f4caf'

//     const fetchProductData = async(evt)=>{
//         // evt.preventDefault()
//         try{
//             const response = await Axios.get(`/api/fetch-edit-product/${productId}`,{
//                 timeout:5000
//             })
//             setProductData(response.data)
//             // console.log('State Updated:', productData)
//         } catch(error){
//             console.log("error", error)
//         }
//     }

//     useEffect(() => {
//         if (productId){
//             fetchProductData ();
//         }
//       }, [productId]);

//     useEffect(() => {
//     console.log('State Updated:', productData);
//     }, [productData]);
    

//     const handleSubmit = async(evt)=>{
//         evt.preventDefault()
//         try {
//             const response = await Axios.put(`/api/edit-product/${productId}`, productData, {
//                 headers: {'content-type': 'application/json', timeout:5000}
//             })
//             console.log('Response : ',response.data)

//         }catch(error){
//             console.log('Error : ',error)
//         }
//     }
//     const handleChange = (evt)=>{
//         const {name, value} = evt.target;
//         setEditedProductData((prev)=> ({...prev, [name]: value}))
//     }

//     return(
//         <div className='w-full flex flex-col justify-center items-center'>
//         <h1 className='text-7xl'>User- registration </h1>
//              <div className="flex flex-col items-center justify-center">
//                  <form onSubmit={handleSubmit} className=' w-full '>
//                     <Input
//                     eventHandler={handleChange}
//                     name='ProductName'
//                     value={productData.ProductName}
//                     id=' ProductName'
//                     label='Product'
//                     labelClass='text-lg'
//                     inputClass=''
//                     placeholder='name of the product'
//                     />

//                     <div className="flex space-x-5">
//                         <div className="w-1/3">
//                         <label htmlFor="Description" className="text-lg font-bold">Description :</label>
//                         </div>
//                         <div className="w-2/3">
//                             <textarea
//                             onChange={handleChange}
//                             value={productData.Description}
//                             name="Description" 
//                             id="Description" 
//                             cols='30' rows='4'
//                             placeholder="provide descriptions" 
//                             className="bg-white rounded-2xl"/>
//                         </div>
//                     </div>


//                     <div className="flex items-center space-x-5 my-5">
//                         <div className="w-1/3">
//                             <label htmlFor="category" className="text-lg font-bold">
//                                 Category :
//                             </label>
//                         </div>
//                         <div className="w-2/3">
//                             <select
//                             onChange={handleChange}
//                             value={productData.Category}
//                             className="bg-white px-10 py-2 rounded-2xl" 
//                             name="Category"
//                             id="category">
//                                 <option value="-">Choose Type</option>
//                                 <option value="type1">Type 1</option>
//                                 <option value="type2">Type 2</option>
//                                 <option value="type3">Type 3</option>
//                                 <option value="type4">Type 4</option>
//                             </select>
//                         </div>
//                     </div>

//                     <Input
//                     value={productData.Image}
//                     name='Image'
//                     id='Image'
//                     type='text'
//                     label='Image'
//                     labelClass='text-lg'
//                     inputClass=''
//                     placeholder='Provide Url as of now'
//                     eventHandler={handleChange}
//                     />

//                     <Input
//                     value={productData.Quantity}
//                     name='Quantity'
//                     id='Quantity'
//                     label='Quantity'
//                     labelClass='text-lg'
//                     inputClass=''
//                     placeholder='Quatity'
//                     eventHandler={handleChange}
//                     />

//                     <CusButton
//                     text='Add Product'
//                     btnClass='bg-white w-full'
//                     onClick='submit'
//                     />
//             </form>
//             {/* <NavLink className='bg-red-500 px-10 py-2 text-lg font-bold rounded-2xl' to='/allproducts'> Back </NavLink> */}
//         </div>
//     </div>
//     )
// }



