import { ChartColumn, ChartPie, Clock5, LayoutDashboard, MessageSquare, Plus, TrendingUp, User } from "lucide-react";
import Brand from "../components/Brand"

function Sidebar(){
    return(
        <aside className="w-64 h-full bg-[#07101F] border-r border-slate-800 flex flex-col justify-between">
            <div className="p-6 space-y-6">
                <div className="pb-4 border-b border-slate-800">
                    <Brand/>
                </div>
                
                <nav>
                    <ul className="font-serif text-sm text-slate-400 space-y-1">
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <LayoutDashboard size={18}/>
                            <span className="text-base">Dashboard</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <TrendingUp size={18}/>
                            <span className="text-base">Rentabilidade</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <Clock5 size={18}/>
                            <span className="text-base">Histórico</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <ChartColumn size={18}/>
                            <span className="text-base">Cotações</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <ChartPie size={18}/>
                            <span className="text-base">Alocação</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <MessageSquare size={18}/>
                            <span className="text-base">IA Assistente</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer transition-colors">
                            <Plus size={18}/>
                            <span className="text-base">Adicionar</span>
                        </li>
                        <li className="flex gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-slate-800/40 hover:text-white cursor-pointer font-medium">
                            <User size={18}/>
                            <span className="text-base">Perfil</span>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="p-6 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center text-white font-bold justify-center text-sm shadow-md">
                    Us
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Usuário</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;