function TextButton(props){
    return(
        <button {...props} className="text-sd text-[#1D4ED8]">
            {props.children}
        </button>
    );
}

export default TextButton;