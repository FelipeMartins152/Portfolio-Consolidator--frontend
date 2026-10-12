import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function SignUpForm(){
    const [fullName, setFullName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        if(!fullName.trim())
            return alert("Preencha o campo nome completo.");
        if(!birthDate.trim())
            return alert("Preencha o campo de data de aniversário.");
        if(!phone.trim())
            return alert("Preencha o campo de telefone");

        const cleanPhone = phone.replace(/\D/g, "");
        if(cleanPhone.length < 11 || cleanPhone.length > 11)
            return alert("Insira um número de telefone válido e com DDD.")

        if(!email.trim())
            return alert("Preencha o campo e-mail");
        if(!password.trim())
            return alert("Preencha o campo senha");
        if(!confirmPassword.trim())
            return alert("Preencha o campo de repetir senha");
        if(password != confirmPassword)
            return alert("As senhas precisam ser iguais.")
    }


    return(
        <form onSubmit={handleSubmit} className="w-full space-y-5 bg-[#070A12] flex flex-col">
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
            <div className="flex flex-col gap-6 mt-10">
                <Button type="submit">Cadastrar</Button>
            </div>
        </form>
    );
}

export default SignUpForm;