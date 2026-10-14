function Avatar(props){
    return(
        <div {...props} className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center text-white font-bold justify-center text-sm shadow-md">
            {props.children}
        </div>
    );
}

export default Avatar;