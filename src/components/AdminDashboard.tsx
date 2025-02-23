
import { Card } from "@/components/ui/card";

export const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Conversations</h3>
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Active Users</h3>
          <p className="text-3xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Response Rate</h3>
          <p className="text-3xl font-bold">0%</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Conversations</h2>
        <div className="text-center text-gray-500 py-8">
          No conversations yet
        </div>
      </Card>
    </div>
  );
};
