// import {propTypes} from "prop-types"
  const PrimaryBtn = ({text}) => {
  return (

    <button>{text ? text : "i'm a button"}</button>
    
  )
// }
// PrimaryBtn.propTypes={  
//     text: propTypes.string.isRequired  // string type is required and can't be null or undefined
}

export default PrimaryBtn


