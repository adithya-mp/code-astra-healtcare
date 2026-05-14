import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        MediGuide AI Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/40 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold">Health Risk Score</h2>
          <p className="text-5xl font-bold text-red-500 mt-4">72%</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/40 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold">Recent Analysis</h2>
          <p className="mt-4">Possible Viral Infection</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/40 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold">Emergency Alerts</h2>
          <p className="mt-4 text-red-500">No active emergencies</p>
        </motion.div>
      </div>
    </div>
  );
}
