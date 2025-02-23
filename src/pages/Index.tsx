
import { AdminDashboard } from "@/components/AdminDashboard";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard />
      <ChatWidget />
    </div>
  );
};

export default Index;
