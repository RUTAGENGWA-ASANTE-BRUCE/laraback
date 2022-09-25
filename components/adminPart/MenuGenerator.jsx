import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { VscSaveAll } from "react-icons/vsc";
import { AiOutlineDesktop } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import LanguageButtonsInput from "./LanguageButtonsInput";
import ToggleComponent from "./ToggleComponent";
import CheckBoxesComponent from "./CheckBoxesComponent";
import ListBoxComponent from "./ListBoxComponent";
import HeaderDescription from "./HeaderDescription";
import DisclosureComponent from "./DisclosureComponent";
export default function MenuBuilder(){
    return(
        <div>
        <HeaderDescription
          content1={"If you are not seeign, latest data, "}
          button={
            <button className="space-x-2 flex w-fit px-5 bg-violet-900 text-white h-8 rounded-md justify-center items-center">
              Click here
            </button>
          }
          content2={"to refresh cache."}
        />

        <HeaderDescription
          content1={
            "In case of change in slug for any page, please remove that item from menu and add again, so that the new link is updated."
          }
        />

        <div className="mt-3 bg-white p-3">
          <div className="bg-gray-100 p-3 flex flex-row relative mt-6 space-x-1.5">
            <p className="mt-2">Select the menu you want to edit: </p>
            <ListBoxComponent />

            <button className="border px-2 py-0.5 border-gray-500 rounded-md mt-0.5">
              Choose
            </button>
            <p className="mt-2">or</p>
            <button className="text-violet-900 mt-2">Create new menu</button>
            <p className="mt-2">.</p>
          </div>
          <div className="w-full flex flex-row justify-between ">
            <div className="w-[25%] pt-10 space-y-3">
              <DisclosureComponent title={"Custom Link"} />
              <DisclosureComponent listBoxAvailable title={"Pages"} />
            </div>
            <div className="mt-10 bg-gray-200 border border-gray-400 p-0  w-[73%] h-fit">
              <div className="w-full h-16 items-center px-2 justify-between  flex flex-row">
                <LanguageButtonsInput
                  placeholder={" "}
                  title={"Name"}
                  buttonsAvailable
                  flexRow
                />
                <div className="flex flex-row relative space-x-1.5">
                  <p className="mt-2">Menu Type</p>
                  <ListBoxComponent />
                </div>
                <button className="space-x-2 flex w-fit px-5 bg-violet-900 text-white h-10 rounded-md justify-center items-center">
                  Create menu
                </button>
              </div>
              <div className="bg-white w-full border-y border-gray-400 p-3 ">
                <div className="border-b pb-3">
                  <h5 className="mt-10 text-2xl">Menu Creation</h5>
                  <h5 className="mt-2">
                    Please enter the name and select "Create menu" button
                  </h5>
                </div>
                <div className="w-[45%] mt-5 space-y-3">
                  <DisclosureComponent title={"Custom Link"} />
                  <DisclosureComponent listBoxAvailable title={"Pages"} />
                </div>
              </div>
              <div className="w-full h-16 flex flex-row-reverse items-center px-2 ">
                <button className="space-x-2 flex w-fit px-5 bg-violet-900 text-white h-10 rounded-md justify-center items-center">
                  Create menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}