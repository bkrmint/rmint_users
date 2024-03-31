
const Button = ({btnText}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-publicsans text-lg leading-none bg-red rounded text-white border-red text-bold cursor-pointer" >
        {btnText ? btnText : "Sign Up"}
    </button>
  )
}

export default Button