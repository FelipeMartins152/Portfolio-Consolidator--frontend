import Button from "../Button";
import Input from "../Input";
import { useState } from "react";

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        if(!email.trim())
            return alert("Preencha o campo e-mail");
        if(!password.trim())
            return alert("Preencha o campo senha");
        
    }

    return(
        <form onSubmit={handleSubmit} className="w-full space-y-5 bg-[#070A12] flex flex-col">
            <div className="flex flex-col gap-1">
                <p className="text-slate-500 text-xs font-semibold">E-MAIL</p>
                <Input 
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-slate-500 text-xs font-semibold">SENHA</p>
                <Input 
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="flex flex-col gap-6 mt-10">
                <Button type="submit">Entrar</Button>
            </div>
        </form>
    );
}

export default LoginForm;