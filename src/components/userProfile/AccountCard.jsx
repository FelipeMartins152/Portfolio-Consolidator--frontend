import Avatar from "../Avatar";

function AccountCard(){
    return(
        <div className="h-full w-full lg:w-80 bg-[#07101F] rounded-2xl border border-slate-800 flex flex-col justify-between p-8 items-center shadow-lg">
            <div className="flex flex-col items-center gap-4 mt-6">
                <Avatar>Us</Avatar>
                
                <div className="text-center flex flex-col gap-1">
                    <h2 className="text-white text-xl font-medium">Usuário</h2>
                    <span className="text-slate-400 text-sm">usuario@email.com</span>
                </div>
            </div>

            <div className="w-full h-[1px] bg-slate-800 my-4"></div>

            <button className="w-full py-3 px-4 bg-[#0A1128] hover:bg-red-950/20 text-red-400 border border-red-600 rounded-xl transition-colors font-medium text-sm cursor-pointer shadow-sm">
                Sair da conta
            </button>
            
        </div>
    );
}

export default AccountCard;