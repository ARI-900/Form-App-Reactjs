import React, {useState } from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        country: "",
        city: "",
        state: "",
        postalCode: "",
        comment: false,
        candidate: false,
        offers: false,
        radio: "",
    })

    function changeHandler(event) {
        const {name, type, value, checked} = event.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value,
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        
        console.log("Form Data after submission: ")
        console.log(formData);
    }


  return (
    <div className='min-h-[100vh] container sm:w-[350px] md:w-[912px] lg:w-[1000px] mx-auto mb-[5rem] 
    p-4 border-2 shadow-lg bg-[#333] text-white rounded-lg'>

        <form onSubmit={submitHandler}>
        <div className='flex flex-col gap-2'>
            <label htmlFor='fname' className='font-semibold py-1'>First Name</label>
            <input 
                id='fname'
                type='text'
                placeholder='Arijit'
                onChange={changeHandler}
                value={formData.fname}
                name='fname'
                className='border-2 rounded-md px-2 py-[0.5rem] text-x'
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor='lname' className='font-semibold py-1'>Last Name</label>
            <input 
                id='lname'
                type='text'
                placeholder='Sharma'
                onChange={changeHandler}
                value={formData.lname}
                name='lname'
                className='border-2 rounded-md px-2 py-[0.5rem] text-x'
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='font-semibold py-1'>Email</label>
            <input 
                id='email'
                type='email'
                name='email'
                placeholder='abc@gmail.com'
                onChange={changeHandler}
                value={formData.email}
                className='border-2 rounded-md px-2 py-[0.5rem] text-x'
            />
        </div>

        {/* select country */}
        <div className='flex flex-col gap-2'>
            <label htmlFor='country' className='font-semibold py-1'>Country</label>
            <select
                id='country'
                name='country'
                value={formData.country}
                onChange={changeHandler}
                className='border-2 rounded-md px-2 py-[0.5rem] text-x text-[#333]'
            >   
                <option value=''>Select Country</option>
                <option value='India'>India</option>
                <option value='USA'>USA</option>
                <option value='UK'>UK</option>
                <option value='Canada'>Canada</option>
                <option value='Australia'>Australia</option>
            </select>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor='city' className='py-1 font-semibold'>City</label>
            <input 
                id='city'
                type='text'
                name='city'
                placeholder='Mumbai'
                onChange={changeHandler}
                value={formData.city}
                className='border-2 rounded-md px-2 py-[0.5rem] text-x'
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor='state' className='py-1 font-semibold'>State</label>
            <input 
                id='state'
                name='state'
                type='text'
                placeholder='State'
                onChange={changeHandler}
                value={formData.state}
                className='border-2 rounded-md px-2 py-[0.5rem] text-x'
            />
        </div>
        {/* postal code section */}

        <div className='flex flex-col gap-2'>
            <label htmlFor='postalCode' className='py-1 font-semibold'>ZIP / Postal Code</label>
            <input 
                id='postalCode'
                name='postalCode'
                type='text'
                placeholder='700123'
                onChange={changeHandler}
                value={formData.postalCode}
                className='border-2 rounded-md px-2 py-[0.5rem] text-x'
            />
        </div>

        <fieldset className='flex flex-col gap-2 mt-[1.3rem]'>
            <legend className='font-semibold text-pretty'>By Email</legend>
            <div className='flex gap-4 items-baseline mt-2'>
                <input 
                    type='checkbox'
                    name="comment"
                    id="comment"
                    onChange={changeHandler}
                    checked={formData.comment}
                />
                <div>
                    <label htmlFor="comment"  className="font-bold ">Comments</label>
                    <p className="font-semibold text-[#bbc] text-[0.85rem]">Get notified when someones posts a comment on a posting.</p>
                </div>
            </div>

            <div className='flex gap-4 items-baseline mt-2'>
                <input 
                    id='candidate'
                    name='candidate'
                    type='checkbox'
                    onChange={changeHandler}
                    checked={formData.candidate}
                />
                <div>
                    <label htmlFor='candidate' className="font-bold ">Candidate</label>
                    <p className="font-semibold text-[#bbc] text-[0.85rem]">Get notified when a candidate applies for a job.</p>
                </div>
            </div>

            <div className='flex gap-4 items-baseline mt-2'>
                <input 
                    id='offers'
                    name='offers'
                    type='checkbox'
                    onChange={changeHandler}
                    checked={formData.offers}
                />
                <div>
                <label htmlFor="offers"  className="font-bold ">offers</label>
                <p className="font-semibold text-[#bbc] text-[0.85rem]">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </div>
            
        </fieldset>


        {/* ------------------------------ */}

        <fieldset className='flex flex-col gap-2 mt-4'>
            <legend className="font-bold text-[1rem]">Push Notifications</legend>

            <p className="text-[#bbb]">These are delivered via SMS to your mobile phone.</p>

            <div className='flex gap-4 mt-2 items-baseline'>
                <input 
                    id='radio'
                    type='radio'
                    name="radio"
                    onChange={changeHandler}
                    value={"Everything"}
                    checked={formData.radio === 'Everything'}
                />
                <label htmlFor="radio" className='font-semibold'>Everything</label>
            </div>
            <div className='flex gap-4 mt-2 items-baseline'>
                <input 
                    id='radio'
                    type='radio'
                    name="radio"
                    onChange={changeHandler}
                    value={"Same as email"}
                    checked={formData.radio === 'Same as email'}
                />
                <label htmlFor="radio" className='font-semibold'>Same as email</label>
            </div>
            <div className='flex gap-4 mt-2 items-baseline'>
                <input 
                    id='radio'
                    type='radio'
                    name="radio"
                    onChange={changeHandler}
                    value={"No push notifications"}
                    checked={formData.radio === 'No push notifications'}
                />
                <label htmlFor="radio" className='font-semibold'>No push notifications</label>
            </div>
        </fieldset>


        {/* button to submit the form */}
        <button type='submit' className='w-full block bg-green-500 px-2 py-[0.5rem] 
        mt-4 font-semibold uppercase rounded-md hover:bg-green-600 transition-all duration-300'>
            Submit
        </button>

        </form>


    </div>  
  )
}
