import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { VscSaveAll } from "react-icons/vsc";
import { AiOutlineDesktop } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import LanguageButtonsInput from "./LanguageButtonsInput" ;
import ToggleComponent from "./ToggleComponent";
import CheckBoxesComponent from "./CheckBoxesComponent";
import ListBoxComponent from "./ListBoxComponent";
import HeaderDescription from "./HeaderDescription";
import DisclosureComponent from "./DisclosureComponent";
import ImagePicker from "./ImagePicker";
import { useForm, Controller } from "react-hook-form";


function CustomizableForm({ routes,formProperties, editFormData }) {
  const submit=(e)=>{
    e.preventDefault()
    const dataObject={}
    
    const api=`/api/admin/${routes[0]}`
    formProperties.formSections[0].elements.forEach(({title})=>{
      if(e.target[title]?.value===undefined){
      dataObject[title]="no"
      }
      else{
        dataObject[title]=e.target[title]?.value
      }
    })
    
    fetch(api,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(dataObject)
    }).then(data=> console.log("success post",api)).catch(err=> console.log(err)
    
    
    )
    console.log("data",dataObject)
  }
  const { register, handleSubmit,control } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={submit}>
      <div className="flex flex-rw justify-between mt-5">
        <div className="flex flex-rw space-x-1.5">
          <button type="submit"  className="space-x-2 flex w-fit px-5 bg-violet-900 text-white h-10 rounded-md justify-center items-center">
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
                    register={register}
                    Controller={Controller}
                    control={control} 
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
                    register={register}
                    Controller={Controller}
                    control={control}
                      placeholder={""}
                      title={element.title}
                      inputAvailable
                      subscripted
                    />
                  );
                } else if (element.type === 3) {
                  return (
                    <LanguageButtonsInput
                    register={register}
                    Controller={Controller}
                    control={control}
                      placeholder={""}
                      title={element.title}
                      inputAvailable
                      buttonsAvailable
                      informationIconAvailable
                    />
                  );
                }

                else if(element.type === 4) {
                  return(

                  <ImagePicker title={element.title}/>
                  )
                }
                else if (element.type === 5) {
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} inputAvailable title={element.title} />)
                }
                else if (element.type === 6) {
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} inputAvailable informationIconAvailable title={element.title} />)
                } 
                else if (element.type ===7){
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} inputAvailable title={element.title} subscripted informationIconAvailable/>)
                }
                else if (element.type === 8) {
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} textEditorAvailable informationIconAvailable title={element.title}/>)
                }
                else if (element.type ===9){
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} toggleInputAvailable subscripted  informationIconAvailable title={element.title}/>)
                }
                else if (element.type ===10){
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} toggleInputAvailable subscripted  title={element.title}/>)
                }
                else if (element.type ===11){
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control} listBoxAvailable  title={element.title}/>)
                }
                else if (element.type ===12){
                  return (<CheckBoxesComponent title={element.title} checkBox1={element.checkBox1} checkBox2={element.checkBox2} checkBox3={element.checkBox3} subscripted />)
                }
                else if (element.type ===13){
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control}  title={element.title} subscripted datePickerAvailable />)
                }
                else if (element.type ===14){
                  return (<LanguageButtonsInput
                  register={register}
                  Controller={Controller}
                  control={control}  title={element.title} subscripted textAreaAvailable />)
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
