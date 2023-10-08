import {useState} from "react"
import{Link} from "react-router-dom"
import{BsEye,BsEyeSlash} from "react-icons/bs"
import{MdOutlineSecurity} from "react-icons/md"
import LinguoLogo from "../../assets/images/logo1a.png"
const ResetPassword = () => {
    const [password,setPassword] =useState("")
    const [confirmPassword,setConfirmPassword] =useState("")
    const [passwordError , setPasswordError]=useState("")
    const [confirmPasswordError , setConfirmPasswordError]=useState("")
    const[type,setType] = useState("password")

    const changeHandler=(e)=>{
        const{name,value}=e.target

        if(name==="password"){
            setPassword(value)
        }

        if(name==="confirmPassword"){
            setConfirmPassword(value)
        }
    }

    const resetHandler=(e)=>{
        e.preventDefault()
        if(password===""){
            setPasswordError("password is required")
        }else if(password.length < 8){
            setPasswordError("password should be more than 7 character")
        }else{
            setPasswordError("")
        }
         if(confirmPassword===""){
            setConfirmPasswordError("confirm password is required")
        }else if(confirmPassword !== password){
            setConfirmPasswordError("confirm password should match password")
        }else{
            setConfirmPasswordError("")
        }
        
        const data={
            password,
            confirmPassword
        }

        
        console.log(data)

        setTimeout(()=>{
           setPasswordError("")
           setConfirmPasswordError("")
        },3000)
        
        
    }
    console.log(password,confirmPassword)
    
    const date = new Date()
  return (
    <div className="m-0 p-0 box-border">
        <div className="m-6 w-[100px]">
            <img src={LinguoLogo} />
        </div>
        <div className=" flex flex-col mx-auto my-0 p-12 h-fourZeroZeroPx w-threeFiftyPx lg:w-fourFiftyPx">
            <div className="mx-auto my-0 text-primaryColor text-4xl lg:text-6xl">
            <MdOutlineSecurity/>
            </div>
            <h2 className="text-center font-lexend text-primaryColor pb-3 font-bold lg:text-2xl">Reset Password</h2>
            <p className="text-center pb-[5px] font-lexend text-inputGrey text-lg">Enter a strong password that is 8 character long.</p>
            <form onSubmit={resetHandler} >
                    <div className="relative ">
                <input type={type}
                 className="w-full rounded-md outline-none  relative border-2 border-grayColor p-2"
                 name="password" id=""
                 onChange={changeHandler} 
                  placeholder="Enter New Password" 
                  value={password}/>
                {type==="password" ? (
                    <BsEye className="absolute top-[15px] right-[10px] cursor-pointer text-grayColor" onClick={()=>setType("text")} />
            
                ):(
                    <BsEyeSlash  className="absolute top-[15px] right-[10px] cursor-pointer text-grayColor" onClick={()=>setType("password")}/>
                )}
                </div>
            <p className="text-left italic text-red-400 text-sm pb-2">{passwordError}</p>
                    <div className="relative">
                <input type={type}
                 className="w-full border-2 rounded-md border-grayColor outline-none p-2"
                 name="confirmPassword" id=""
                 onChange={changeHandler} 
                  placeholder="Confirm Password" 
                  value={confirmPassword}/>
                {type==="password" ? (
                    <BsEye className="absolute top-[15px] right-[10px] cursor-pointer text-grayColor" onClick={()=>setType("text")} />
            
                ):(
                    <BsEyeSlash  className="absolute top-[15px] right-[10px] cursor-pointer text-grayColor" onClick={()=>setType("password")}/>
                )}
                </div>
            
            <p className="text-left italic text-red-400 text-sm pb-4">{confirmPasswordError}</p>
            <button className= "w-full  text-center border-grayColor text-white cursor-pointer font-lexend bg-primaryColor mt-2 p-1 rounded-md hover:bg-onhoverColor" 
            type="submit" >Reset Password</button>
            <Link to="/login">
            <p className="text-center font-lexend font-medium text-primaryColor pt-2">Back To Login</p>
            </Link>
            </form>
        </div>
       <div className="text-center mt-2 lg:mt-10">
        <p className="font-lexend text-inputGrey">&copy; copyrights {date.getFullYear()} <span className="text-primaryColor">langleap</span></p>
       </div>
    </div>
  )
}

export default ResetPassword