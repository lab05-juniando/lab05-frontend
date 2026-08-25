import Sidebar from "../../components/sidebar";
import Header from "../../components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B1326]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
/**/