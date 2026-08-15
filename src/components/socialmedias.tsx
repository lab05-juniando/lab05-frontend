import { Button } from "./buttons";

export default function SocialMedias() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-600" />
        <span className="text-sm font-semibold text-slate-300 whitespace-nowrap tracking-wide">
          OU CONTINUE COM
        </span>
        <div className="flex-1 h-px bg-slate-600" />
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <Button
          weight="600"
          size="compact"
          iconType="google"
          borderColor="white"
          iconPosition="left"
          className="transparent"
        >
          Google
        </Button>

        <Button
          weight="600"
          size="compact"
          iconType="github"
          borderColor="white"
          iconPosition="left"
          className="transparent"
        >
          GitHub
        </Button>
      </div>

      <h3 className="text-sm text-white mt-4 text-center">
        Não tem uma conta?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Cadastre-se
        </a>
      </h3>
    </div>
  );
}
