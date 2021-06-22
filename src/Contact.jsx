import React,{useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
        FullName:"",
        phonenumber:"",
        email:"",
        Message:""
    });

    const InputEvent = (event) => {
        const { name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            };
            });
        };
     
      const formSubmit = (e) =>{
          e.preventDefault();
          alert(`My name is ${data.FullName}.
          My phone number is ${data.phonenumber}.
          My email is ${data.email},
          here is what i say ${data.Message}`)

      }
    return (
        <>
        <div className="div_container">
            <h1 className="text-center">Contact Us</h1>
       
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={formSubmit}>
               <div className="mb-3">
                 <label for="name" class="form-label">
                     Full Name
                     </label>
                  <input 
                  type="text"
                  value={data.FullName}   
                  onChange={InputEvent}             
                  placeholder="Enter Your name" 
                  class="form-control" 
                 id="exampleInputEmail1" 
                 name='FullName'
                 />
                   
                 </div>
               <div class="mb-3">
                 <label for="phone number" class="form-label">Phone Number</label>
                 <input 
                 type="number" 
                 value={data.phonenumber}   
                 onChange={InputEvent} 
                 placeholder="Enter your phone number"
                 class="form-control" 
                 id="exampleInputPhone number" 
                 name="phonenumber"
                />
                </div>
                <div className="mb-3">
                 <label for="exampleInputPassword1" class="form-label">
                     Email Address
                     </label>
                 <input 
                 type="email" 
                 value={data.email}   
                  onChange={InputEvent}
                 placeholder="abc@gmail.com"
                 class="form-control" 
                 id="exampleInputEmail" 
                 name="email"
                 />
                </div>
                <div className="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Message</label>
                 <textarea 
                 value={data.Message}   
                 onChange={InputEvent}
                 placeholder='enter the msg'
                 class="form-control" 
                 id="exampleformcontroltextarea1" 
                 rows='3' 
                 name="Message"
                 
                 >

                 </textarea>
                </div>
              <div className="mb-3 form-check">
                 <input 
                 type="checkbox" 
                 class="form-check-input" 
                 id="exampleCheck1"
                 />
                   <label class="form-check-label" for="exampleCheck1">Check me out</label>
               </div>
              
                   <button type="submit" class="btn btn-primary">Submit</button>
                 </form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;
