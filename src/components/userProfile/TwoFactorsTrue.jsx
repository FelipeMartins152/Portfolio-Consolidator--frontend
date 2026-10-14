import { ShieldCheck } from "lucide-react";

function TwoFactorsTrue({onClick}){
    return(

        <button onClick={onClick} className="bg-emerald-900/20 border border-emerald-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-950/40 text-emerald-400 rounded-xl border border-emerald-900/50 flex items-center justify-center">
                    <ShieldCheck size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">2FA ativado</span>
                    <span className="text-emerald-400 text-xs">Autenticador Google</span>
                </div>
            </div>

            <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 flex items-center justify-end cursor-pointer transition-colors shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
            </div>
        </button>
        
    );
}

export default TwoFactorsTrue;