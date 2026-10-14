import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AccountCard from "../components/userProfile/AccountCard";
import AccountSecurity from "../components/userProfile/AccountSecurity";
import RegistrationData from "../components/userProfile/RegistrationData";
import { Menu } from "lucide-react";

function UserProfilePage(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <div className="w-full min-h-screen bg-[#070A12] flex">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            <main className="flex-1 flex flex-col p-4 sm:p-8 gap-6 overflow-y-auto">
                <header className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setIsSidebarOpen(true)}
                        aria-label="Abrir menu"
                        className="p-3 rounded-lg text-white hover:bg-white/10 transition"
                    >
                        <Menu size={25}/>                    
                    </button>
                    <Header>Perfil</Header>
                </header>
                <section className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start p-5">
                    <AccountCard />
                    <div className="space-y-4">
                        <RegistrationData />
                        <AccountSecurity />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default UserProfilePage;