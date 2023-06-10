import { useContext } from "react";
import useClasses from "../../../../Hooks/useClasses";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";


const MyClasses = () => {
  const {user} = useContext(AuthContext)
  const [classes] = useClasses()
  console.log(classes)
  const myclasses = classes.filter(myclass => myclass.instructorEmail === user.email)
  console.log(myclasses)
    return (
      <div className="mt-16">
        <div>
      {
        myclasses.map(myclass => 
        <div key={myclass._id}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-96 h-72" src={myclass.image} alt="Sunset in the mountains"/>
  <div className="px-4 py-4 flex">
    <div className="font-bold text-xl mb-2">Class: {myclass.name}</div>
    <div className="w-1 bg-warning">
       {myclass.status}
    </div>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
        )
      }
        </div>
      </div>
    );
};

export default MyClasses;