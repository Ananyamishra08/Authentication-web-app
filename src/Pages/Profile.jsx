function Profile() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="border-b p-4">
        <h1 className="text-lg font-semibold">Account Settings</h1>
      </div>

      <div className="p-4 flex items-start gap-4 border-b">
        <div className="relative">
          <img
            src="https://via.placeholder.com/60"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full text-xs">
            📷
          </span>
        </div>

        <div>
          <h2 className="font-semibold">Marry Doe</h2>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="p-4 text-sm text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  );
}

export default Profile;
