import Logo from "../components/icons/Logo";
import Button from "../components/welcome/Button";
import FeatureItem from "../components/welcome/FeatureItem";

function Welcome() {
  return (
    <div className="w-screen min-h-screen bg-[#070A12] flex justify-center items-center p-6">
      <div className="flex flex-col items-center w-full max-w-md">
        <Logo className="w-16 h-16 mb-4" />
        <h1 className="text-3xl font-serif text-white text-center mb-2">
          ConsolidadorI
        </h1>
        <p className="font-serif text-sm text-slate-400 text-center mb-6">
          Sua carteira toda em um lugar
        </p>
        <div className="w-full flex flex-col gap-3">
          <FeatureItem
            icon={<span className="text-xl">📊</span>}
            title="Consolide seus ativos"
            description="Ações, FIIs e cripto em um só painel"
          />
          <FeatureItem
            icon={<span className="text-xl">📈</span>}
            title="Acompanhe a rentabilidade"
            description="Gráficos históricos e desempenho da carteira"
          />
          <FeatureItem
            icon={<span className="text-xl">🤖</span>}
            title="Assistente com inteligência artificial"
            description="Insights personalizados e análise em tempo real"
          />
        </div>
        <div className="w-full flex flex-col p-6">
            <Button>Começar gratuitamente</Button>
        </div>
        <div className="w-full flex justify-center gap-2">
            <p className="font-serif text-sx text-slate-500 text-center">Já tem conta?</p>
            <p className="font-serif text-sx text-[#60A5FA] text-center">Entrar</p>
        </div>
        
      </div>
    </div>
  );
}

export default Welcome;
