import { useState } from "react";
import TwoFactorsTrue from "./TwoFactorsTrue";
import TwoFactorsFalse from "./TwoFactorsFalse";
import { ArrowRight } from "lucide-react";

function AccountSecurity(){
    const [twoFactors, setTwoFactors] = useState(false);

    return(
        <div className="w-full bg-[#07101F] rounded-2xl border border-slate-800 p-6 flex flex-col gap-5 shadow-lg">
            <h3 className="text-white text-lg font-medium">Segurança da conta</h3>

                {twoFactors ? <TwoFactorsTrue onClick={() => setTwoFactors(!twoFactors)}/> : <TwoFactorsFalse onClick={() => setTwoFactors(!twoFactors)}/>}
            
            <div className="flex items-center justify-between p-4 bg-[#0A1128] hover:bg-[#101B3B] border border-slate-800 rounded-xl transition-colors cursor-pointer group">
                <span className="text-white text-sm font-medium">Alterar senha</span>
                <ArrowRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
            </div>
        </div>
    );
}

export default AccountSecurity;