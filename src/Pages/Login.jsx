function Login() {
  return (
    <div className="flex flex-col justify-start h-full p-6 bg-gray-50">
      <h1 className="text-xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="w-full">
        <label className="text-sm text-purple-600 font-medium">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full border rounded-md p-3 mt-1 mb-4"
        />

        <label className="text-sm text-purple-600 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border rounded-md p-3 mt-1 mb-6"
        />

        <button className="w-full bg-gray-300 text-gray-700 py-3 rounded-md font-medium">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
