import Logo from "./icons/Logo";

function Brand(){
    return(
        <div className="font-serif flex flex-row gap-2">
            <Logo className="w-5 h-6 mb-4" />
            <h1 className="text-white">ConsolidadorI</h1>
        </div>
    );
}

export default Brand;