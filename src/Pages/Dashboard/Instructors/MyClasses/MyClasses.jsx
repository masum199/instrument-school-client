import { useContext } from "react";
import useClasses from "../../../../Hooks/useClasses";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { Fade, Slide } from "react-awesome-reveal";
import './MyClasses.css'

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
                        <p className={myclass.status === "pending" ? "bg-warning text-white" : myclass.status === "denied" ? "bg-red-700 text-white" : myclass.status === "approved" ? "bg-lime-700 text-white" : ""}>{myclass.status}</p>
                      </div>
                      <div className="h-28">
                        {
                          myclass.status === "denied" && <Fade>{myclass.feedback}
                          </Fade> ||myclass.status === "approved" && <Fade>{myclass.feedback}</Fade>
                        }
                      </div>
                      <div className="card-actions justify-between">
                        <Slide>
                          <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl'>
                            Enrolled {myclass.enrolled}
                          </span>
                        </Slide>
                        <Slide direction="right">
                          <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl'>
                            Seats {myclass.availableSeats}
                          </span>
                        </Slide>
                      </div>
                    </div>
                    <Slide direction="up">
                      <button className='w-full inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                        Click Me
                      </button>
                    </Slide>
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