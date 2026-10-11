import Button from "../components/Button";
import SignUpForm from "../components/signUp/SignUpForm";
import ValuePropositionSidebar from "../components/ValuePropositionSidebar";
import TextButton from "../components/TextButton"
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const navigate = useNavigate();

    function onLoginPageClick(){
        navigate(`/login`);
    }

    return(
        <div className="w-full min-h-screen bg-[#070A12] flex justify-center items-center py-8 px-4">
            <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-[#07101F] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full lg:w-1/2">
                    <ValuePropositionSidebar />
                </div>
                <div className="w-full lg:w-1/2 p-8 bg-[#070A12] flex flex-col justify-center">
                    <h1 className="text-2xl text-white text-center font-bold mb-6">Cadastre-se</h1>
                    <SignUpForm />
                    <div className="flex flex-col gap-6 mt-10">
                        <Button>Cadastrar</Button>
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                        <p className="font-serif text-sx text-slate-500 text-center">Já tem conta?</p>
                        <TextButton onClick={onLoginPageClick}>Login</TextButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;