import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import ReCAPTCHA from "react-google-recaptcha";
import { BsGift } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, setUserData } from "../utils/redux/slices/authSlice";
// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   var expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

function AuthForm() {
  const router = useRouter();
  const [formAction, setFormAction] = useState("register");
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  console.log("User Data:", userData);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleGetUser = async () => {
    const user = await fetch("/api/user", { method: "GET" });

    console.log(user);
  };

  const handleLogOut = async () => {
    const user = await fetch("/api/auth/logout", { method: "GET" });

    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      Email,
      Password,
    };

    if (formAction == "register") {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((data) => {
          // setCookie("userId", data._id, 3);
          // dispatch(setUserData(data));
          router.push("/");
        });
    } else {
      await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((res) => res.json())
        .then((data) => {
          // setCookie("userId", data._id, 3)
          // dispatch(setUserData(data))
          router.push("/");
        });
    }
  };

  return (
    <div className=" w-[100%] mx-auto md:w-[33%] z-50 h-[87vh] mt-5 py-5 bg-white rounded-br-[70px] rounded-tl-[70px]">
      <div className="pb-3 border-b">
        <div className="flex flex-row text-white h-10 w-fit px-3 m-auto items-center font-light bg-orange-500 rounded-full">
          <BsGift className="text-base" />
          <p className="ml-2">
            Sign up & get <span className="text-purple-900">Rp50.00</span> Today
          </p>
        </div>
        <div className="flex flex-row mx-auto w-fit space-x-3 mt-5">
          <button className="h-12 w-20 border bg-blue-900  flex rounded-md">
            <BsFacebook className="text-3xl text-white m-auto" />
          </button>
          <button className="h-12 w-20 border rounded-md">
            <BsGoogle className="text-3xl text-red-800 m-auto" />
          </button>
        </div>
        <p className="font-light mt-2 text-center">
          We'll never post anything without your permission.
        </p>
      </div>
      <form
        className=" flex flex-col pt-7 space-y-5 w-96 mx-auto"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="bg-orange-50 p-2.5 flex rounded-md  shadow-md shadow-purple-200 flex-row">
          <input
            className="mr-2 w-[90%] bg-transparent outline-none border-none"
            placeholder="Email"
            type="text"
            name="username"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <AiOutlineMail className="text-2xl text-gray-300" />
        </div>
        <div className="bg-orange-50 p-2.5  flex rounded-md  shadow-md shadow-purple-200 flex-row">
          <input
            className="mr-2  w-[90%] bg-transparent outline-none border-none"
            placeholder="Enter Password"
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <RiLockPasswordLine className="text-2xl text-gray-300" />
        </div>
        <p className="font-light ">
          <input type="checkbox" className="w-5 h-5" /> I Agree to{" "}
          <span className="cursor-pointer text-purple-600 font-normal">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="cursor-pointer text-purple-600 font-normal">
            Terms of Use
          </span>
        </p>
        <p className="text-purple-600  text-right cursor-pointer">
          Did someone refer you?
        </p>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

          // onChange={onChange}
        />
        {formAction == "register" && (
          <div className="mt-2">
            <button className="rounded-md text-white font-light w-full bg-purple-800 p-1 px-2 h-10 mt-1">
              JOIN NOW
            </button>
            <p className="text-center">
              {" "}
              Existing user{" "}
              <button
                onClick={() => setFormAction("login")}
                className=" text-orange-400 font-normal"
              >
                Sign In
              </button>
            </p>
          </div>
        )}

        {formAction == "login" && (
          <div  className="mt-2">
            <button className="rounded-md text-white font-light w-full bg-purple-800 p-1 px-2 h-10 mt-1">
              LOGIN
            </button>
            <p className="text-center">
              {" "}
              New user{" "}
              <button
                onClick={() => setFormAction("register")}
                className=" text-orange-400 font-normal"
              >
                Register
              </button>
            </p>
          </div>
        )}

        <p className="font-light text-gray-400 text-center">
          Joining & Referral Bonus Terms Apply*{" "}
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
