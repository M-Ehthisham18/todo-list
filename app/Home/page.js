"use client";
import Carousel from "@/components/Carousel";
import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [deletedTask, setDeletedTask] = useState([]);

  // const [error, setError] = useState(''); // State for error message

  // form submit handler starts here
  const submitHandler = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    //Format the date and time in IST (Indian Standard Time)
    const formattedDate = parseInt(
      currentDate.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        // weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Use 12-hour format
      }),
      10
    );
    let intdate = parseInt(date, 10000);
    let inttime = parseInt(time, 10);

    // console.log(typeof currentDate + "current date");
    // console.log(typeof formattedDate + "for formated");
    // console.log(() + " user date")
    // if(formattedDate > (intdate+inttime)){
    //   alert("valid input only");
    //   // return submitHandler;
    //   console.log("current time");
    // }
    // else{
    //   console.log("given date")
    // }

    // Check if the selected date and time are in the past
    // const selectedDateTime = new Date(`${date}T${time}`);
    // const currentDateTime = new Date();

    // if (selectedDateTime < currentDateTime) {
    //   setError('Please enter a future date and time.');
    //   return;
    // }
    // setError(''); // Clear error message if everything is valid
    setMainTask([...mainTask, { title, description, date, time }]);
    setTitle("");
    setDescription("");
    setTime("");
    setDate("");
  }; // form submit handler ends here

  //task delete handler starts here
  const deleteHandeler = (i) => {
    let copyTask = [...mainTask];
    let deleted = copyTask.splice(i, 1);
    setMainTask(copyTask);
    deleted.map((v) => {
      let title = v.title;
      let desc = v.description;
      if (deletedTask.length >= 5) {
        deletedTask.splice(0, 1);
      }
      setDeletedTask([...deletedTask, { title, desc }]);
    });
  };
  //task completed handler starts here
  const comopletedHandler = (i) => {
    let copyTask = [...mainTask];
    const completed = copyTask.splice(i, 1);
    // console.log(completed)
    setMainTask(copyTask);
    completed.map((v) => {
      let title = v.title;
      let desc = v.description;
      // setCompletedTask([...completedTask, { title, desc }]);
      if (completedTask.length >= 5) {
        completedTask.splice(0, 1);
      }
      setCompletedTask([...completedTask, { title, desc }]);
    });

    // console.log()
  };

  // task rendering starts here
  let renderTask = (
    <h1 className=" font-bold text-xl  pl-16 min-h-[60px] flex items-center  bg-gray-50 shadow-xl rounded-xl">
      {" "}
      no task available{" "}
    </h1>
  );
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <>
          <li
            key={i}
            className="w-full min-h-[60px] max-h-[100px] border-4 border-transparent px-[16px] py-[8px] grid grid-cols-[50px_auto_200px_120px_120px]  gap-4 place-items-center text-ellipsis overflow-hidden  bg-gray-50  shadow-xl p-8 rounded-lg"
          >
            <div className="col-span-1">{i + 1} </div>
            <div className="col-span-1 justify-self-start pl-16">
              <span className="font-bold text-xl "> {task.title}</span> :{" "}
              {task.description}
            </div>
            <div className="col-span-1 text-center">
              {task.date} <br /> {task.time}{" "}
            </div>
            <div className="col-span-1">
              <button
                className="bg-green-500 text-white rounded-lg px-6 py-2 text-lg font-bold"
                onClick={() => {
                  comopletedHandler(i);
                }}
              >
                completed
              </button>
            </div>
            <div className="col-span-1">
              {" "}
              <button
                className="bg-red-400 text-white rounded-lg px-6 py-2 text-lg font-bold"
                onClick={() => {
                  deleteHandeler(i);
                }}
              >
                Delete
              </button>
            </div>
          </li>
          <hr className=" h-2 bg-transparent" />
        </>
      );
    });
  }

  let renderCompletedTask = (
    <h1 className="font-bold text-xl  pl-16 min-h-[60px] flex items-center   bg-red-50 shadow-xl rounded-lg">
      {" "}
      No task has completed{" "}
    </h1>
  );
  if (completedTask.length > 0) {
    renderCompletedTask = completedTask.map((task, i) => {
      return (
        <>
          <li
            key={i}
            className="w-full min-h-[60px] max-h-[100px] border-4 border-transparent px-[12px] py-[8px] grid grid-cols-[30px_auto_30px]  gap-4 place-items-center text-ellipsis overflow-hidden  bg-green-50  shadow-xl rounded-lg"
          >
            <div className="col-span-1">{i + 1} </div>
            <div className="col-span-1 justify-self-start pl-6">
              {" "}
              <span className="font-bold text-xl "> {task.title}</span> :{" "}
              {task.desc}
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/8625/8625364.png" />
            </div>
          </li>
          <hr className=" h-2 bg-transparent" />
        </>
      );
    });
  }

  let renderDeletedTask = (
    <h1 className="font-bold text-xl  pl-16 min-h-[60px] flex items-center   bg-green-50 shadow-xl rounded-lg">
      {" "}
      No task has Failed
    </h1>
  );
  if (deletedTask.length > 0) {
    renderDeletedTask = deletedTask.map((task, i) => {
      return (
        <>
          <li
            key={i}
            className=" w-full min-h-[60px] h-[50px] border-4 border-transparent px-[12px] py-[8px] grid grid-cols-[30px_auto_30px]  gap-4 place-items-center text-ellipsis overflow-hidden  bg-red-50  shadow-xl rounded-lg"
          >
            <div className="col-span-1">{i + 1} </div>
            <div className="col-span-1 justify-self-start pl-6">
              {" "}
              <span className="font-bold text-xl "> {task.title}</span> :
              {task.desc}
            </div>
            <div className="text-red-600 pr-6 text-xl font-semibold">
              {/* <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" /> */}
              failed!
            </div>
            <hr className=" h-2 bg-transparent" />
          </li>
        </>
      );
    });
  }

  // Create a new Date object
  //const currentDate = new Date();
  // Format the date and time in IST (Indian Standard Time)
  // const formattedDate = currentDate.toLocaleString("en-IN", {
  //   timeZone: "Asia/Kolkata",
  //   // weekday: "long",
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  //   hour12: true, // Use 12-hour format
  // });

  return (
    <>
      <div className="px-16 py-8">
        <p className="text-center text-2xl leading-loose px-36 ">
          A well-organized to-do list can boost productivity by keeping you on
          track with your tasks, reducing the mental load of remembering
          everything, and offering satisfaction as tasks are checked off.
        </p>
        <hr className="mt-12 border-black" />
        {/* form starts here  */}
        <div className="flex h-[388px] ">
          <form onSubmit={submitHandler} className="w-1/2 pr-6 my-12">
            {/* title  */}
            <label className=" pl-8 font-bold text-2xl ">Task</label>
            <input
              name="task"
              type="text "
              placeholder="Movie ticket Booking."
              className="w-full h-12 rounded-md px-4 py-1 border-2 border-black mb-4 block text-xl  "
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            {/* description  */}
            <label className=" pl-8 font-bold text-2xl ">Description</label>
            <textarea
              rows="4"
              cols="50"
              placeholder="Night show (9:00 pm) for 4 members. "
              className="w-full h-32 rounded-md px-4 py-2 border-2 border-black mb-4 block    "
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <br />

            <button className="bg-green-400 px-8 py-2 mr-4 rounded-md text-xl font-extrabold capitalize float-end">
              add task
            </button>
            <br />
            <br />
          </form>
          <div className="w-1/2 p-4 my-12">
            <div className="w-full h-full border-2 border-black rounded-[0.5rem]  ">
              <Carousel className=" w-full"/>
            </div>
          </div>
        </div>
        {/* task menu */}
        <div className="w-full border-[5px] border-black my-10 h-[500px] rounded-3xl overflow-hidden relative">
          <header className="w-full h-[50px] bg-black text-white pl-[50px] text-3xl self-center font-mono flex items-center  ">
            Task
          </header>
          {/* rendering output  */}
          <div className="h-[450px] overflow-hidden overflow-y-auto">
            <div className=" py-2 px-4  ">{renderTask}</div>
          </div>
        </div>
        {/* task menu ends here  */}

        {/* input start here  */}
        <div className="flex gap-4 ">
          <div className="w-1/2 border-[5px] border-black my-10 min-h-96 rounded-3xl overflow-hidden ">
            <header className="w-full h-[50px] bg-black text-white pl-[50px] text-3xl self-center font-mono flex items-center">
              Completed Task
            </header>
            {/* rendering output  */}
            <div className=" p-2 ">{renderCompletedTask}</div>
          </div>
          <div className="w-1/2 border-[5px] border-black my-10 min-h-96 rounded-3xl overflow-hidden ">
            <header className="w-full h-[50px] bg-black text-white pl-[50px] text-3xl self-center font-mono flex items-center">
              Failed to Complete Task
            </header>
            {/* rendering output  */}
            <div className=" p-2 ">{renderDeletedTask}</div>
          </div>
        </div>
        {/* input ends here  */}
      </div>
      <div className="first-letter:capitalize  bg-purple-200 ">
        not you but methis is an example text that only capitalizes the first
        letter of the first word.
      </div>
    </>
  );
};

export default Home;
