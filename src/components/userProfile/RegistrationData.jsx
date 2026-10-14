function RegistrationData(){
    return(
        <div className="w-full bg-[#07101F] rounded-2xl border border-slate-800 p-6 flex flex-col gap-5 shadow-lg">
            <h3 className="text-white text-lg font-medium">Dados cadastrais</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0A1128] border border-slate-800 rounded-xl p-4 flex flex-col gap-1">
                    <span className="text-slate-400 text-xs font-normal">Nome completo</span>
                    <span className="text-white text-base font-semibold">Usuário</span>
                </div>

                <div className="bg-[#0A1128] border border-slate-800 rounded-xl p-4 flex flex-col gap-1">
                    <span className="text-slate-400 text-xs font-normal">Telefone</span>
                    <span className="text-white text-base font-semibold">+55 (11) 9 9999-8888</span>
                </div>

                <div className="bg-[#0A1128] border border-slate-800 rounded-xl p-4 flex flex-col gap-1">
                    <span className="text-slate-400 text-xs font-normal">Perfil de investidor</span>
                    <span className="text-white text-base font-semibold">Moderado</span>
                </div>
            </div>
        </div>
    );
}

export default RegistrationData;