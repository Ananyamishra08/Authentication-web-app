function Register() {
  return (
    <div className="flex flex-col justify-start h-full p-6 bg-white">
      <h1 className="text-xl font-bold mb-6">Create your PopX account</h1>

      <form className="w-full">
        <div className="mb-4">
          <label className="text-sm text-purple-600 font-medium">Full Name*</label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border rounded-md p-3 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-purple-600 font-medium">Phone number*</label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border rounded-md p-3 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-purple-600 font-medium">Email address*</label>
          <input
            type="email"
            placeholder="Marry Doe"
            className="w-full border rounded-md p-3 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-purple-600 font-medium">Password*</label>
          <input
            type="password"
            placeholder="Marry Doe"
            className="w-full border rounded-md p-3 mt-1"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-purple-600 font-medium">Company name</label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="w-full border rounded-md p-3 mt-1"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-purple-600 font-medium mb-2">
            Are you an Agency?*
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-md font-medium">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
