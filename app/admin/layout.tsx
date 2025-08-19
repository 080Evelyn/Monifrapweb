import AdminHeader from "@/components/admin/Header";
import SideNavbar from "@/components/admin/SideNavbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row lg:[--sidebar-width:12.5rem] xl:[--sidebar-width:13.5rem] w-full overflow-x-hidden">
      <SideNavbar />
      <div className="flex flex-col max-lg:mt-12.5 w-full h-screen overflow-y-auto lg:w-[calc(100vw-var(--sidebar-width))]">
        <AdminHeader />
        <div className="bg-[#F0F0F0] px-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
