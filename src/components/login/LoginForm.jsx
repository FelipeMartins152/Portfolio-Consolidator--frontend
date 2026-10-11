import Input from "../Input";
import { useState } from "react";

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="w-full space-y-5 bg-[#070A12] flex flex-col">
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
        </div>
    );
}

export default LoginForm;