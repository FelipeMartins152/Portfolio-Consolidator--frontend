import { ChartColumn, ChartPie, Clock5, LayoutDashboard, MessageSquare, Plus, TrendingUp, User } from "lucide-react";
import Brand from "../components/Brand"
import Avatar from "./Avatar";

function Sidebar({isOpen, onClose}){
    return(
        <>
        <button
            onClick={onClose}
            className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        />

        <aside className={`fixed top-0 left-0 z-50 w-64 max-w-[85vw] h-full bg-[#07101F] border-r border-slate-800 flex flex-col justify-between
                    transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
            <div className="p-6 space-y-6 overflow-y-auto">
                <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
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
                <Avatar>Us</Avatar>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Usuário</span>
                </div>
            </div>
        </aside>
        </>
    );
}

export default Sidebar;