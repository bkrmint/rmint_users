
const Button = ({className, href, onClick, children, px, white}) => {

  // const classes = `flex justify-center items-center gap-2 px-7 py-4 border font-publicsans text-lg leading-none bg-red rounded text-white border-red text-bold cursor-pointer ${className}`;

  const classes = `button relative inline-flex items-center justify-center ${className || ''}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick} >
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={className} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink(): renderButton();
}

export default Button

{/* <button className="flex justify-center items-center gap-2 px-7 py-4 border font-publicsans text-lg leading-none bg-red rounded text-white border-red text-bold cursor-pointer" >
        {btnText ? btnText : "Sign Up"}
</button> */}