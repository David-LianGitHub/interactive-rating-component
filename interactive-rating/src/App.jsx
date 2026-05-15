
import { useState } from 'react';
import './App.css'
import thankYou from './assets/images/illustration-thank-you.svg';
import starIcon from './assets/images/icon-star.svg';
function App() {
    const [selectedRating, setSelectedRating] = useState(null);
     const [submitted, setSumitted] = useState(false);
  
  return (

    <div className="min-h-screen w-screen bg-[#141519] flex items-center justify-center p-4">
      
      <div className= "bg-[#202630] max-w-sm w-full rounded-2xl p-6 sm:p-8 space-y-6 ">

        { submitted ? (
          <div className= "bg-[#202630] max-w-sm w-full rounded-2xl p-6 sm:p-8 space-y-6  ">
              <div className='rounded-full h-26 w-full text-[#5B636C]  grid justify-center items-center'>
                <img src={thankYou} alt="star" ></img>      

              </div>
                 <div className='grid justify-center'>
                    <h3 className='inline-block text-center text-[#F1770E] px-5 py-1  rounded-full  bg-[#272F38]'>
                      {`You selected ${selectedRating} out of 5`}
                    </h3>
                 </div>
                  <h1 className="text-center text-2xl font-bold text-white">
                  Thank you!
                  </h1>

              <p className='text-center text-white text-sm leading-6'>
                      We appreciate you taking the time to give a rating.
              If you ever need more support, don’t hesitate to get in touch!
              </p>

              <div className='flex justify-between'>
                 
              </div>

             
           </div>
        )
           : (
            
            <div className= "bg-[#202630] max-w-sm w-full rounded-2xl p-6 sm:p-8 space-y-6  ">
              <div className='rounded-full h-10 w-10 text-[#5B636C] bg-[#272f38] grid justify-center items-center'>
                <img src={starIcon} alt="star" ></img>      

              </div>

                  <h1 className="text-2xl font-bold text-white">
                  How did we do?
                  </h1>

              <p className='text-white text-sm leading-6'>
                    Please let us know how we did with your support request All feedback is 
                    appreciated to help us improve our offering.
              </p>

              <div className='flex justify-between'>
                  {                    
                    [1,2,3,4,5].map((num)=> {
                      return (
                        <div 
                          key={num} 
                          onClick={() => setSelectedRating(num)} 
                          className= {`hover:bg-[#F1770D]  hover:text-black transition cursor-pointer 
                                        font-bold rounded-full h-10 w-10 text-[#5B636C] bg-[#272f38] grid justify-center items-center
                                        ${
                                          selectedRating=== num ? "bg-white text-black" : "bg-[#272f38] text-white"
                                          }
                                          
                                          `}> 
              
                          {num}
                        </div>

                      )
                    })
                  }
              </div>

               <button disabled = {!selectedRating} onClick={
                
                ()=> setSumitted(true)}className={`w-full rounded-full bg-[#F1770D] py-3 font-bold hover:bg-white
                             hover:text-black transition cursor-pointer  ${
      selectedRating
        ? "bg-[#F1770D] hover:bg-white hover:text-black cursor-pointer"
        : "active:bg-red-500 cursor-not-allowed"
    }` }>
                 SUBMIT
                </button>
           </div>


           )
      }

         
      </div>
     
    </div>
  );
}

export default App;

