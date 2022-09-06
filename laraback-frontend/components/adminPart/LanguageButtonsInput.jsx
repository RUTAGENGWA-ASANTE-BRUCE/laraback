import React, {useState} from 'react';
import dynamic from 'next/dynamic'
import {BsInfoCircle} from 'react-icons/bs'
import ToggleComponent from './ToggleComponent';
import { ListBox } from './ListBoxComponent';
import DatePickerComponent from './DatePickerComponent';
import { useForm } from "react-hook-form";

const EditorComponent=dynamic(()=>import('./EditorComponent'),{ssr:false})
function LanguageButtonsInput({
  title,
  placeholder,
  subscripted,
  informationIconAvailable,
  buttonsAvailable,
  inputAvailable,
  textAreaAvailable,
  datePickerAvailable,
  register,
  listBoxAvailable,
  toggleInputAvailable,
  flexRow,
  textEditorAvailable,
}) {
    

  return (
    <div className={flexRow?'flex flex-row space-x-2':'flex flex-col'}>
      <h6 className="text-lg mt-4 font-semibold">
        {title}
        {subscripted && <sup className="text-bold">*</sup>}
        {informationIconAvailable && <BsInfoCircle  className="inline ml-1 -mt-1"/>}
      </h6>
      <div className={flexRow?'flex flex-row-reverse gap-x-2':''}>

      {buttonsAvailable && (
        <div className="flex flex-row space-x-1 mt-3.5">
          <button className="space-x-2 flex w-14 px-5 bg-violet-900 h-6 tet-white    justify-center items-center">
            en
          </button>
          <button className="space-x-2 flex bg-gray-400 h-6 w-14  justify-center items-center">
            fr
          </button>
        </div>
      )}
      {inputAvailable && (
        <input
          type="text"
          name={title}
          // {...register(title)}
          className={`${flexRow?'p-1':'p-2'} w-full border-2 border-gray-400  ${flexRow && 'h-9 mt-1'} ${!flexRow && 'rounded-md'} ${flexRow?'':'mt-2'}`}
          placeholder={placeholder}
          required
        />
      )}
      </div>
      {textEditorAvailable && (
      <div className="mt-2 border p-2">

       <EditorComponent />

      </div>
      )}
      {textAreaAvailable && (
        <textarea rows={6}{...register(title)}  className="w-full border-2 border-gray-400 p-2 rounded-md" />
      )}
      {toggleInputAvailable && (<ToggleComponent register={register} name={title} />)}
      {listBoxAvailable && (<ListBox />)}
      {datePickerAvailable && (<DatePickerComponent />)}
    </div>
  );
}

export default LanguageButtonsInput;
