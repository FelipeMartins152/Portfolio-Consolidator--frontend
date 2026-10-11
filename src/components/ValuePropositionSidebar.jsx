import Brand from "./Brand";

function ValuePropositionSidebar(){
    return(
        <div className="w-full h-full bg-[#07101F] flex flex-col p-12 space-y-6">
            <div className="flex">
                <Brand />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-serif text-xl text-white">Gerencie sua carteira com inteligência</h2>
                <p className="font-serif text-sm text-slate-500">Consolide os seus ativos em um painel profissional</p>
            </div>
            <div className="flex flex-col">
                <ul className="font-serif text-sm text-slate-500 space-y-3">
                    <li className="flex gap-2 items-center">
                        <p className="text-green-500">✓</p>
                        <p>Rentabilidade</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <p className="text-green-500">✓</p>
                        <p>Assistente com IA integrado</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <p className="text-green-500">✓</p>
                        <p>Segurança com 2FA</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ValuePropositionSidebar;