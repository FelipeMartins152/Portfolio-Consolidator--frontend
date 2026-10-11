function Button (props){
    return(
        <button className=" bg-[#1D4ED8] p-3 rounded-lg text-white">
            {props.children}
        </button>
    );
}

export default Button;