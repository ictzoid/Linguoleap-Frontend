import { useState } from "react"
import LinguoLogo from "../../assets/images/logo1a.png"
import loginHero from "../../assets/images/Hero image.png"
import {FcGoogle} from "react-icons/fc"
import {BsApple, BsEye, BsEyeSlash} from "react-icons/bs"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
const Login = () => {

    const initialValues ={
        userName:"",
        password:"",
    }

    const[input,setInput] = useState(initialValues)
    const[checked,setChecked] = useState(false)
    const[showPassword, setShowPassword]= useState("password")

    const checkedHandler=()=>{
        setChecked(!checked)
    }

    const changeHandler=(e)=>{
        const{name,value}=e.target;

        setInput((curr)=>({
            ...curr,
            [name]:value
        }))
    }

    console.log(input)

    const submitHandler=()=>{

        if(input.userName==="" || !input.password===""){
            toast.error("input fields are required to login")
            return
        }else{
            
        const data={
            userName:input.userName,
            password:input.password
        }
        console.log(data)
    }
        if(checked){
            setInput({
                userName:input.userName,
                password:input.password
            })
        }else{
            setInput({
                userName:"",
                password:""
            })
        }
        
    }

  return (
    <div className="m-0 p-0 border-box" >
        <div className="flex justify-center items-center w-full h-full">
        <div className="hidden lg:flex flex-1 h-screen">
            <div className="m-8  h-nintyVh">
                <img src={LinguoLogo} alt=""  className="w-hundredPx" />
                <div className="w-full mt-8 h-eightyVh ">
                <img src={loginHero} alt="" className="h-full w-fourHundredPx pl-32" />
                </div>
            </div>
        </div>
        <div className="flex-1  h-screen" >
            <div className="m-12  h-nintyVh">
                <h2 className="text-lexend text-2xl pb-2 text-center font-bold">Welcome back!</h2>
                <p className="text-center text-lexend text-inputGrey pb-2">Unlock the world of languages and embark <br />
                 on extraordinary experience <br />
                    Login now and discover the power of communication.
                </p>
                <div className="w-9/12 p-4 mx-auto my-2 h-4 border-2 flex justify-center items-center rounded-md border-primaryColor">
                    <FcGoogle className="text-2xl"/>
                    <p className="text-lexend text-primaryColor font-medium pl-3 text-lg cursor-pointer">Continue with Google</p>
                </div>
                <div className="w-9/12 p-4 mx-auto mt-4 mb-0 h-4 border-2 flex justify-center items-center rounded-md border-primaryColor">
                    <BsApple className="text-2xl"/>
                    <p className="text-lexend text-primaryColor font-medium pl-3 text-lg cursor-pointer">Continue with Apple</p>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="border-1 border-inputGrey ml-2 w-[33%]" />
                    <p className="p-2 text-lg font-medium">or</p>
                    <hr className="border-1 border-inputGrey w-[33%]" />
                </div>
                <div className="relative flex flex-col justify-center items-center ">
                <input type="text" className=" rounded-md border-2 w-9/12 p-1 outline-none text-lexend border-inputGrey mb-4"
                    placeholder="Username/Email" value={input.userName} name="userName" onChange={changeHandler} />
                <input type={showPassword}  className=" rounded-md border-2 relative outline-none text-lexend p-1 w-9/12 border-inputGrey" 
                    placeholder="password" value={input.password} name="password" onChange={changeHandler} />
                    {showPassword==="password" ? (
                        <BsEye className="absolute bottom-2 cursor-pointer right-[60px] lg:right-[80px]" onClick={()=>setShowPassword("text")}/>
                    ):(
                        <BsEyeSlash className="absolute cursor-pointer bottom-2 right-[60px] lg:right-[80px]" onClick={()=>setShowPassword("password")} />
                    )}
                
                </div> 
                <div className="flex items-center justify-between w-9/12 mx-auto my-0">
                    <div className="flex items-center gap-2">
                    <input type="checkbox" checked={checked} onChange={checkedHandler} />
                    <label htmlFor="" className="text-lexend font-medium">keep me logged in</label>
                    </div>
                        <Link to="/forgetPassword">
                        <p className="text-lexend text-primaryColor font-medium cursor-pointer">forgot password?</p>
                        </Link>
                   </div>
                        <button onClick={submitHandler} className="w-9/12 mx-14 lg:mx-16 mt-6 lg:mt-10 mb-2 text-white p-1 hover:bg-onhoverColor rounded-md bg-primary color bg-primaryColor">
                            Login</button>
                        <p className="text-lexend  text-lg text-center font-medium"> Don't have an account? 
                        <span className="text-primaryColor cursor-pointer pl-2 "><Link to="/register"> Sign up</Link></span>
                        </p>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login