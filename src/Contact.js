import React, { useState } from 'react';

const Contact = () => {
const [data,setData] = useState({
          
    fullname:" ",
    phone: " ",
    email: " ",
    msg: " ",
 
});

 const InputEvent = (event) => {
     const {name, value} =event.target;

     setData((preVal) =>{
         return{
             ...preVal,
             [name] : value,
         };
     });
 };

   const formSubmit= (e) => {
       e.preventDefault();
       alert(`${data.fullname}. My mobile number is ${data.phone} and email is ${data.email},
        Here is what I want to say ${data.msg}`
       );
   };

    return(
        <>
          <div className="my-5">
              <h1 className="text-center">Contact Us</h1>
          </div>
          <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                
        <form onSubmit={formSubmit}>
                <div className="form-group">
                <label to="exampleInputEmail1">Full Name</label>
                <input type="text" className="form-control"
                 id="exampleInputEmail1" 
                 placeholder="Enter your FullName"
                 name="fullname"
                 value={data.fullname}
                 onChange={InputEvent}
                 />
                </div>
                  
                <div className="form-group">
                <label to="exampleInputphoneNumber">Phone Number</label>
                <input type="text" className="form-control"
                 id="exampleInputphoneNumber"
                 placeholder="Enter your phone number"
                 name="phone"
                 value={data.phone}
                 onChange={InputEvent}
                  />
                </div>

                <div className="form-group">
                <label to="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" 
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Email Address"
                 name="email"
                 value={data.email}
                 onChange={InputEvent}
                  />
                </div>

                <div className="form-group">
                <label to="exampleInputPassword1">Message</label>
                <textarea className="form-control" 
                id="exampleformControlTextarea1" 
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                >

                </textarea>
                </div>
                   <div className="col-12 mt-3 "> 
                  <button type="submit" className="btn btn-outline-primary px-3">Submit</button>
                 </div>
         </form>
              </div>
            </div>
          </div>
        </>
    );
};

export default Contact ;