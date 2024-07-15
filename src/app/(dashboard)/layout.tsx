import { SidebarNav } from './sidebar-nav';
import { Topbar } from './topbar';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full overflow-x-clip pl-sidebar-nav">
      <SidebarNav />
      <Topbar />
      <div className="h-11" />
      <main className="mx-auto min-w-[1200px] max-w-screen-2xl px-12 pb-14">
        {children}
      </main>
    </div>
  );
}
