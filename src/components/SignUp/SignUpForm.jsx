import { useState } from "react";
import Input from "../Input";

function SignUpForm(){
    const [fullName, setFullName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return(
        <div className="w-full space-y-5 bg-[#070A12] flex flex-col">
            <div className="flex flex-col gap-1">
                <p className="text-slate-500 text-xs font-semibold">NOME COMPLETO</p>
                <Input 
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-slate-500 text-xs font-semibold">DATA DE NASCIMENTO</p>
                <Input 
                    type="date"
                    placeholder=""
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-slate-500 text-xs font-semibold">NÚMERO DE TELEFONE</p>
                <Input 
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </div>
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
            <div className="flex flex-col gap-1">
                <p className="text-slate-500 text-xs font-semibold">REPETIR SENHA</p>
                <Input 
                    type="password"
                    placeholder="Repita sua senha"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>
        </div>
    );
}

export default SignUpForm;