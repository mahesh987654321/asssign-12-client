import React from "react";
import "./Summery.css";
const Summary = () => {
  return (
    <div>
      <div className="text-center mt-20 mb-16">
        <p className="text-5xl text-primary font-bold mx-20">
          <span className="sum-text">BUSNIESS SUMMERY</span>
        </p>
        <h1 className="text-2xl  text-black font-bold">
          <span className="client">TRY TO MAKE OUR CLIENT ALWAYS HAPPY</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 text-center w-10/12 mx-auto gap-20">
        <div>
          <div>
            <span className="material-symbols-outlined text-9xl text-primary">
              flag
            </span>
          </div>
          <div className="text-5xl text-black font-bold">72</div>
          <div className="text-2xl font-bold text-primary">Countries</div>
        </div>
        <div>
          <div>
            <span className="material-symbols-outlined text-9xl text-primary">
              task
            </span>
          </div>
          <div>
            <h1 className="text-5xl text-black font-bold">562+</h1>
          </div>
          <div className="text-2xl font-bold text-primary">
            Completed Projects
          </div>
        </div>
        <div>
          <div>
            <span className="material-symbols-outlined text-9xl text-primary">
              group_add
            </span>
          </div>
          <div>
            <h1 className="text-5xl text-black font-bold">10000+</h1>
          </div>
          <div className="text-2xl font-bold text-primary">Users</div>
        </div>
        <div>
          <div>
            <span className="material-symbols-outlined text-9xl text-primary">
              comment
            </span>
          </div>
          <div>
            <div className="text-5xl text-black font-bold">732+</div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Feedback</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ****************** */}
      <div className="flex flex-wrap w-9/12 justify-around items-center mx-auto mt-20 bg-gray-100 h-36 mb-16 shadow-xl">
        <div className="">
          <div className="text-primary font-bold text-3xl cen">
            <p className="ques">Have a questions or wanted to know about us</p>
            <p className="get">get a requests?</p>
          </div>
          <p className="text-2xl font-bold text-black">
            Don't hesitate contact us
          </p>
        </div>
        <div className="">
          <button className="btn btn-primary text-white mr-10">
            Request for Quote
          </button>
          <button className="btn btn-accent">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
