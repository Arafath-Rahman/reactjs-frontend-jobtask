import Profile from "./Profile/Profile";

const Sidebar = () => {
  return (
    <div className='w-96 h-screen border rounded-3xl shadow-gray-400 shadow-xl flex justify-center'>
      <Profile />
    </div>
  );
};

export default Sidebar;