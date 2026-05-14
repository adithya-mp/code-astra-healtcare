export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-white">
      <div className="bg-white/40 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          MediGuide AI
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl border mb-4"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
}
