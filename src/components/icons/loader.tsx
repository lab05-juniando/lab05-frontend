import { PacmanLoader } from "react-spinners";



export default function Loader() {
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <PacmanLoader
                color="#fff"
                size={32}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <h1 className="text-xs mt-4">Calma lá meu amigo, carregando...</h1>
        </div>
    );
}