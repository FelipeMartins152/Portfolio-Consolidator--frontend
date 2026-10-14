import { Bell } from "lucide-react";
import Avatar from "./Avatar";

function Header(props){
    return(
        <div className="flex items-center justify-between w-full pb-6 border-b border-slate-800">
            <h2 {...props} className="text-white text-2xl font-semibold">{props.children}</h2>

            <div className="flex items-center gap-2">

                <div className="p-2.5 bg-[#0A1128] hover:bg-[#101B3B] text-slate-300 rounded-xl border border-slate-800 transition-colors cursor-pointer flex items-center justify-center shadow-sm">
                    <Bell size={18} className="text-slate-400"/>
                </div>

                <Avatar>Us</Avatar>
            </div>

        </div>
    );
}

export default Header;