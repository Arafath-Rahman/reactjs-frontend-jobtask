import { MdFormatListBulleted, MdOutlineFeaturedPlayList } from "react-icons/md";

const ViewToggle = () => {
  return (
    <div className='w-72 bg-white h-40 rounded-lg shadow-gray-300 shadow-lg flex flex-col items-center gap-4 mb-6'>
      <div className="mt-2">
        <h2 className="text-2xl font-bold text-center">View Toggle</h2>
      </div>
      <div className="w-52 h-20 bg-slate-200 rounded-lg flex justify-center">
        <div className="flex justify-center items-center pr-5 border-r-gray-300 border-r">
          <MdOutlineFeaturedPlayList className="text-5xl" />
        </div>
        <div className="flex justify-center items-center ml-5">
          <MdFormatListBulleted className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default ViewToggle;