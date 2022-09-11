import React, { useState } from "react";
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
import ImagePicker from "./ImagePicker";
import { useForm, Controller } from "react-hook-form";

function CustomizableForm({ routes, formProperties, editFormData }) {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [previewSource, setPreviewSource] = useState();
  const [listBoxValue, setListBoxValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [hiddenInputValue, setHiddenInputValue] = useState();
  const uploadImage = (base64EncodedImage) => {};
  const submit = async (e) => {
    e.preventDefault();
    const dataObject = {};
    var api=""
    if(routes[routes.length-1].length===24){
      api = `/api/${routes[routes.length-3]}/${routes[routes.length-1]}`;
    }
    else{
      api = `/api/${routes[0]}`;
    }
    formProperties.formSections[0].elements.forEach(({ title }) => {
      if (e.target[title]?.value === undefined) {
        dataObject[title] = "no";
      } else {
        dataObject[title] = e.target[title]?.value;
      }
    });
    if (previewSource) {
      const formData = new FormData();
      formData.append("upload_preset", "laraback");
      formData.append("file", previewSource);
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/laraback/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

      setImageSrc(data.secure_url);
      dataObject["Logo"] = imageSrc;
    }

    fetch(api, {
      method:routes[routes.length-1].length===24?"PUT":"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    })
      .then((data) => console.log("success post", api))
      .catch((err) => console.log(err));
    console.log("data", dataObject);
  };

  const handleFIleInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <form onSubmit={submit}>
      {hiddenInputValue && (
        <input
          type="text"
          name={hiddenInputValue.title}
          hidden
          value={hiddenInputValue.value}
        />
      )}
      <div className="flex flex-rw justify-between mt-5">
        <div className="flex flex-rw space-x-1.5">
          <button
            type="submit"
            className="space-x-2 flex w-fit px-5 bg-violet-900 text-white h-10 rounded-md justify-center items-center"
          >
            <BsCheckLg />
            <p>Apply Change(s)</p>
          </button>
          <button className="space-x-2 flex w-fit px-5 bg-rose-500 text-white h-10 rounded-md justify-center items-center">
            <VscSaveAll />
            <p>Save</p>
          </button>
          <button className="space-x-2 flex w-fit px-5 bg-amber-600 text-white h-10 rounded-md justify-center items-center">
            Clone
          </button>
          <button className="space-x-2 flex w-fit px-5 border-violet-900 border-2 text-violet-900 h-10 rounded-md justify-center items-center">
            <AiOutlineDesktop />
            <p>FrontEnd</p>
          </button>
        </div>
        <MdOutlineClose className="text-3xl text-gray-400 " />
      </div>
      <div className="mt-5 justify-between flex flex-row flex-1">
        {formProperties.formSections.map((section) => {
          return (
            <div className={`w-[49%] rounded-t-md bg-white p-3 h-fit mb-3`}>
              {section.title && (
                <h6 className="text-lg mt-3 font-semibold">{section.title}</h6>
              )}
              {section.elements.map((element) => {
                if (element.type === 1) {
                  return (
                    <LanguageButtonsInput
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      placeholder={""}
                      inputAvailable
                      title={element.title}
                      buttonsAvailable
                      subscripted
                    />
                  );
                } else if (element.type === 2) {
                  return (
                    <LanguageButtonsInput
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      placeholder={""}
                      title={element.title}
                      inputAvailable
                      subscripted
                    />
                  );
                } else if (element.type === 3) {
                  return (
                    <LanguageButtonsInput
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      placeholder={""}
                      title={element.title}
                      inputAvailable
                      buttonsAvailable
                      informationIconAvailable
                    />
                  );
                } else if (element.type === 4) {
                  return (
                    <ImagePicker
                      formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      previewSource={previewSource}
                      fileInputState={fileInputState}
                      handleFIleInputChange={handleFIleInputChange}
                      title={element.title}
                    />
                  );
                } else if (element.type === 5) {
                  return (
                    <LanguageButtonsInput
                                            formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      inputAvailable
                      title={element.title}
                    />
                  );
                } else if (element.type === 6) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      inputAvailable
                      informationIconAvailable
                      title={element.title}
                    />
                  );
                } else if (element.type === 7) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      inputAvailable
                      title={element.title}
                      subscripted
                      informationIconAvailable
                    />
                  );
                } else if (element.type === 8) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      textEditorAvailable
                      informationIconAvailable
                      title={element.title}
                    />
                  );
                } else if (element.type === 9) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      toggleInputAvailable
                      subscripted
                      informationIconAvailable
                      title={element.title}
                    />
                  );
                } else if (element.type === 10) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      toggleInputAvailable
                      subscripted
                      title={element.title}
                    />
                  );
                } else if (element.type === 11) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      listBoxAvailable
                      title={element.title}
                    />
                  );
                } else if (element.type === 12) {
                  return (
                    <CheckBoxesComponent
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      title={element.title}
                      checkBox1={element.checkBox1}
                      checkBox2={element.checkBox2}
                      checkBox3={element.checkBox3}
                      subscripted
                    />
                  );
                } else if (element.type === 13) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      title={element.title}
                      subscripted
                      datePickerAvailable
                    />
                  );
                } else if (element.type === 14) {
                  return (
                    <LanguageButtonsInput
                                          formPartData={
                        editFormData ? editFormData[element.title] : ""
                      }
                      setHiddenInputValue={setHiddenInputValue}
                      dateValue={dateValue}
                      setDateValue={setDateValue}
                      title={element.title}
                      subscripted
                      textAreaAvailable
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default CustomizableForm;
