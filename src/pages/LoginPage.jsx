import LoginForm from "../components/login/LoginForm";
import TextButton from "../components/TextButton";
import ValuePropositionSidebar from "../components/ValuePropositionSidebar";

function LoginPage(){
    return(
        <div className="w-full min-h-screen bg-[#070A12] flex justify-center items-center py-8 px-4">
            <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-[#07101F] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full lg:w-1/2">
                    <ValuePropositionSidebar />
                </div>
                <div className="w-full lg:w-1/2 p-8 bg-[#070A12] flex flex-col justify-center">
                    <h1 className="text-2xl text-white text-center font-bold mb-2">Bem-vindo de volta</h1>
                    <p className="font-serif text-sm text-center text-slate-500 mb-8">Acesse sua carteira com segurança</p>
                    <LoginForm />
                    <div className="flex justify-center gap-2 mt-4">
                        <p className="font-serif text-sx text-slate-500 text-center">Esqueceu a senha?</p>
                        <TextButton>Recuperar</TextButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;