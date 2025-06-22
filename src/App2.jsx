/* const FormNameInput =()=>{
  return(
    <div>
      <label >
        <span>Enter Name</span>
        <input placeholder="Akash ..." />

      </label>

    </div>
    
  )
}
const FormEmailInput =()=>{
  return(
    <div>
      <label >
        <span>Enter Email</span>
        <input type="email" placeholder="Akash@gmail.com ..." />

      </label>

    </div>
    
  )
}
const FormPasswordInput =()=>{
  return(
    <div>
      <label >
        <span>Enter Password </span>
        <input type="password"placeholder="*******" />

      </label>

    </div>
    
  )
} */
/*  problem
Now there in above code components  , so many things have been repeated such as, the div tag, span tag, input tag for each of component, the only 3 things are changing the input placeholder, type of input and span-text.  */

/* PROPS
 so to overcome this we use Props, in this the parents component passing some values to the childrens are called props. */

// const FormInput =(props)=>{
const FormInput =({text , type, placeholder})=>{
  // we can also de-structure it..
   return(
    <div>
      <label >
        {/* <span>{props.text}</span> */}
        {/* <input type={props.type} placeholder={props.placeholder} /> */}
        <span>{text}</span>
        <input type={type} placeholder={placeholder} />

      </label>

    </div>
   )
   // props is an data which is passed through parrent component to child component..
}


  const formInput =[
    // rendering form using jsx
    {id :1, text:"Enter name : ", type:"text" ,placeholder:"Akash..."},
    {id:2 ,  text:"Enter Email : ", type:"email" ,placeholder:"Akash@145"},
    {id:3,text:"Enter Password : " ,type:"password" ,placeholder:"********"},
  ]

function App(){ // App is an parent component.

  return(
    <>
    
    {
      formInput.map(input => <FormInput key={input.id} text={input.text} type={input.type} placeholder={input.placeholder}  /> )
      // react using the key to remember each thing with unique id
    }


    {/* <FormInput text="Enter name : " type="text" placeholder="Akash..." />
   <FormInput text="Enter Email : " type="email" placeholder="Akash@145" />
   <FormInput text="Enter Password : " type="password" placeholder="********" /> */}

   

   
  
    </>


  //  <FormNameInput/> child component 1 
  //   <FormEmailInput/>  child component 2 
  //   <FormPasswordInput/>  child component 3 
   


  )
}
export default App;