import { useState } from "react";
import { BiCalendar } from "react-icons/bi";

function AddAppointment({ onSendAppointment, lastId }) {
  // this is the array of objects
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  }
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: FormDataEvent.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <div className="px-8">
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        // THIS IS TAILWIND CSS CODE
        className={`bg-[#91C8E4] text-black px-2 py-3 w-full text-lg text-left rounded-t-md ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <BiCalendar className="inline-block align-text-top text-xl" /> Add
          Appointment
        </div>
      </button>

      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-left  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className=" mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                onChange={(event) => {
                  setFormData({ ...formData, ownerName: event.target.value });
                }}
                value={formData.ownerName}
                // max-w-lg block w-full dark:bg-gray-700 dark:focus:ring-blue-500 focus:text-white-700 focus:bg-emarald-50 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-200 rounded-lg
                className="max-w-lg bg-white-50 border border-gray-400 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:text-black-900 focus:ring-blue-500 dark:focus:border-blue-700"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-left  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                onChange={(event) => {
                  setFormData({ ...formData, petName: event.target.value });
                }}
                value={formData.petName}
                className="max-w-lg bg-white-50 border border-gray-400 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5  dark:text-black-900 focus:ring-blue-500 dark:focus:border-blue-700"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-left  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                onChange={(event) => {
                  setFormData({ ...formData, aptDate: event.target.value });
                }}
                value={formData.aptDate}
                className="max-w-lg bg-white-50 border border-gray-400 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:text-black-900 focus:ring-blue-500 dark:focus:border-blue-700"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-left  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                onChange={(event) => {
                  setFormData({ ...formData, aptTime: event.target.value });
                }}
                value={formData.aptTime}
                className="max-w-lg bg-white-50 border border-gray-400 text-sm rounded-lg focus:ring-transparent block w-full p-2.5  dark:text-black-900 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="shadow-sm border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm rounded-md"
                placeholder="Detailed comments about the condition"
                onChange={(event) => {
                  setFormData({ ...formData, aptNotes: event.target.value });
                }}
                value={formData.aptNotes}
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPublish}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddAppointment;

/* <div> 
      

      {toggleForm && (
        <div className="border-r-2 border-b-2 border-b-1 border-light-gray-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid  sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px s:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                onChange={(event) => {
                  setFormData({ ...formData, ownerName: event.target.value });
                }}
                value={formData.ownerName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* 2 div */

//       <div className="sm:grid sm:grid-col-3 sm:gap-4 sm:items-start sm:pt-5">
//         <label
//           htmlFor="petName"
//           className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-3"
//         >
//           Pet Name
//         </label>
//         <div className="mt-1 sm:mt-0 sm:col-span-2">
//           <input
//             type="text"
//             name="petName"
//             id="petName"
//             value={formData.petName}
//             onChange={(event) => {
//               setFormData({ ...formData, petName: event.target.value });
//             }}
//             className="max-w-lg block-w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* 3 div */}

//       <div className="sm:grid sm:grid-col-3 sm:gap-4 sm:items-start sm:pt-5">
//         <label
//           htmlFor="aptDate"
//           className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//         >
//           Apt Data
//         </label>
//         <div className="mt-1 smLmt-0 sm:col-span-2">
//           <input
//             type="date"
//             name="aptDate"
//             id="aptDate"
//             onChange={(event) => {
//               setFormData({ ...formData, aptDate: event.target.value });
//             }}
//             value={formData.aptDate}
//             className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 foucs:boder-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//       </div>
//       {/*  pt-3 ----> padding-top( 3rem)
//                 py-4 ----> padding-top & bottom
//                 px-7 ----> padding-left-right
//                 pl - ----> padding-left rem
//                 pr ----->  padding-right
//                 pb = padding bottom

//                 mt-3 ----> margin-top( 3rem)
//                 my-4 ----> margin-top & bottom
//                 mx-7 ----> margin-left-right
//                 ml - ----> margin-left rem
//                 mr ----->  margin-right
//                 mb = margin bottom
//                 m-auto------>margin auto

//             */}
//       {/* 4th div */}
//       <div className="sm:grid sm:grid-col-3 sm:gap-4 sm:items-start sm:pt-5">
//         <label
//           htmlFor="aptTime"
//           className="block text-sm font-medium text-gray-700 sm:mt-px "
//         >
//           Apt Time
//         </label>
//         <div className="mt-1 sm:mt-0 sm:col-span-2">
//           <input
//             type="time"
//             id="aptTime"
//             name="aptTime"
//             onChange={(event) => {
//               setFormData({ ...formData, aptTime: event.target.value });
//             }}
//             value={formData.aptTime}
//             className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* 4th div */}

//       <div>
//         <label htmlFor="aptNoted"
//          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//         >
//           Appointment Notes
//         </label>
//         <div className="mt-1 sm:mt-0 sm:col-span-2">
//           <textarea name="aptNotes" id="aptNoted"  rows="3"
//           onChange={(event)=>{setFormData({...formData,aptNotes:event.target.value})}}
//             className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"
//           >
//           </textarea>
//         </div>
//       </div>

//       <div className="pt-5">
//             <div className="flex justify-end">
//               <button type="submit" onClick={formDataPublish} className="ml-3 inline flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
//                 Submit
//               </button>
//             </div>
//       </div>
//     </div>
//   )}
// </div> */}
