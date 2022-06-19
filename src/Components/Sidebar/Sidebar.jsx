import Feedback from "./Feedback/Feedback";
import Profile from "./Profile/Profile";
import ViewToggle from "./ViewToggle/ViewToggle";

const Sidebar = () => {
  return (
    <div className='w-96 h-screen border rounded-3xl shadow-gray-400 shadow-xl flex flex-col items-center'>
      <Profile />
      <ViewToggle />
      <Feedback />
    </div>
  );
};

export default Sidebar;