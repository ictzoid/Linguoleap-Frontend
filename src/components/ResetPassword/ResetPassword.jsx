import {useState} from "react"
import{Link} from "react-router-dom"
import styles from "./ResetPassword.module.css"
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

        console.log(password,confirmPassword)
        console.log(data)

        setTimeout(()=>{
            setPassword("")
        setConfirmPassword("")
        },10000)
        
        
    }
   
    
    const date = new Date()
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="../src/assets/images/logo1a.png" alt="Linguoleap Logo" />
        </div>
        <div className={styles.inner_container}>
            <div className={styles.security_logo}>
                <img src="../src/assets/images/security2.png" alt="" />
            </div>
            <h2>Reset Password</h2>
            <p>Enter a strong password that is 8 character long.</p>
            <form onSubmit={resetHandler} >
            <div className={styles.form_grp}>
                <input type={type} name="password" id="" onChange={changeHandler}  placeholder="Enter New Password" value={password}/>
                {type==="password" ? (
                    <img src="../src/assets/images/visibility.png" alt="" className={styles.visibility} onClick={()=>setType("text")} />
                ):(
                    <img src="../src/assets/images/visibility_off.png" alt="" className={styles.visibility} onClick={()=>setType("password")} />
                )}

                
                
            </div>
            <p className={styles.error}>{passwordError}</p>
            <div className={styles.form_grp}>
                <input type={type} name="confirmPassword" id="" onChange={changeHandler} placeholder="Confirm New Password" value={confirmPassword} />
                    {type==="password" ? (
                         <img src="../src/assets/images/visibility.png" alt="" className={styles.visibility} onClick={()=>setType("text")} />
                    ):(
                        <img src="../src/assets/images/visibility_off.png" alt="" className={styles.visibility} onClick={()=>setType("password")} />
                    )}
               
            </div>
            <p className={styles.error}>{confirmPasswordError}</p>

            <button className={styles.reset_btn} type="submit" >Reset Password</button>
            <Link to="./login">
            <p>Back To Login</p>
            </Link>
            </form>
        </div>
       <div className={styles.footer}>
        <p>&copy; copyrights {date.getFullYear()} <span>langleap</span></p>
       </div>
    </div>
  )
}

export default ResetPassword