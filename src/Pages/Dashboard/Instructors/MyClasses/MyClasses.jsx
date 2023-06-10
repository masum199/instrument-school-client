import { useContext } from "react";
import useClasses from "../../../../Hooks/useClasses";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";


const MyClasses = () => {
  const { user } = useContext(AuthContext)
  const [classes] = useClasses()
  console.log(classes)
  const myclasses = classes.filter(myclass => myclass.instructorEmail === user.email)
  console.log(myclasses)
  return (
    <section className="">
      <div className="mt-16 ">
        <div className={myclasses.length === 1 && "" || myclasses.length === 2 && "grid grid-cols lg:grid-cols-2 gap-4" || myclasses.length > 2 && "grid grid-cols lg:grid-cols-3 gap-4"}>
          {
            myclasses.map(myclass =>
              <div key={myclass._id} className="">
                <div>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-96" src={myclass.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <div className="flex gap-52 items-center">
                      <h2 className="card-title">
                        {myclass.name}
                        </h2>
                        <p className={myclass.status === "pending" ? "bg-warning text-white" : myclass.status === "deny" ? "bg-red-700 text-white" : myclass.status === "approved" ? "bg-lime-700 text-white" : ""}>{myclass.status}</p>
                      </div>
                      
                      {
                        myclass.status === "approved" ? <p>{myclass.feedback}</p> : ""
                      }
                      <div className="card-actions justify-between">
                        <div className="badge badge-outline">
                    
                          <p>enrolled {myclass.enrolled}</p></div>
                        <div className="badge badge-outline">Seats {myclass.availableSeats}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default MyClasses;