import React from "react";
 
export default function Contact(){
return(
    <div className="absolute top-20 left-20 right-20">
<form class="mt-10">
  <div class="mb-5 w-full">
    <input type="text" id="name" class="border-0 border-b-4 border-gray-900 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white " placeholder="username" required />
  </div>
  <div class="mb-5 w-full">
    <input type="text" id="name" class="border-0 border-b-4 border-gray-900 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white " placeholder="userAge" required />
  </div>
  <div class="mb-5 w-full">
    <input type="text" id="name" class="border-0 border-b-4 border-gray-900 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white " placeholder="userEmail" required />
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

    </div>
)
}