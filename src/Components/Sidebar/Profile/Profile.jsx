
const Profile = () => {
  return (
    <div className='w-72 bg-white h-20 rounded-lg shadow-gray-300 shadow-lg flex items-center mt-16 mb-6'>
      <div className="ml-3.5">
          <img className="w-14 h-14 rounded-full" src="https://api.lorem.space/image/face?hash=28212" alt="user avatar"/>
      </div>
      <div className="ml-3.5">
        <h4 className="text-xl font-bold leading-none">Hi Reader</h4>
        <p className="text-base ">Here's your news!</p>
      </div>
    </div>
  );
};

export default Profile;