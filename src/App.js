// import React, { useState } from "react";

// const App = () => {
//   const [selectedPages, setSelectedPages] = useState([]);

//   const handlePageChange = (pageId) => {
//     if (selectedPages.includes(pageId)) {
//       setSelectedPages(selectedPages.filter((id) => id !== pageId));
//     } else {
//       setSelectedPages([...selectedPages, pageId]);
//     }
//   };

//   const handleAllPagesChange = () => {
//     if (selectedPages.length === 4) {
//       setSelectedPages([]);
//     } else {
//       setSelectedPages(["1", "2", "3", "4"]);
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-200">
//       <div className="bg-white rounded-md shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Select Pages</h2>
//         <div className="flex gap-4">
//           <div className="w-1/3">
//             <h3 className="text-lg font-semibold mb-2">Button</h3>
//             <div className="flex flex-col gap-2">
//               <button className="bg-yellow-400 text-white rounded-md py-2 px-4">
//                 Done
//               </button>
//               <button className="bg-yellow-400 text-white rounded-md py-2 px-4">
//                 Done
//               </button>
//               <button className="bg-yellow-400 text-white rounded-md py-2 px-4">
//                 Done
//               </button>
//               <button className="bg-yellow-400 text-white rounded-md py-2 px-4">
//                 Done
//               </button>
//             </div>
//           </div>
//           <div className="w-1/3">
//             <h3 className="text-lg font-semibold mb-2">Home</h3>
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.length === 4}
//                   onChange={handleAllPagesChange}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("1")}
//                   onChange={() => handlePageChange("1")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("2")}
//                   onChange={() => handlePageChange("2")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("3")}
//                   onChange={() => handlePageChange("3")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("4")}
//                   onChange={() => handlePageChange("4")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("1")}
//                   onChange={() => handlePageChange("1")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("2")}
//                   onChange={() => handlePageChange("2")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("3")}
//                   onChange={() => handlePageChange("3")}
//                 />
//                 <span>All pages</span>
//               </div>
//             </div>
//           </div>
//           <div className="w-1/3">
//             <h3 className="text-lg font-semibold mb-2">Frame 8445891</h3>
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("1")}
//                   onChange={() => handlePageChange("1")}
//                 />
//                 <span>All pages</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("2")}
//                   onChange={() => handlePageChange("2")}
//                 />
//                 <span>Page 1</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("3")}
//                   onChange={() => handlePageChange("3")}
//                 />
//                 <span>Page 2</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("4")}
//                   onChange={() => handlePageChange("4")}
//                 />
//                 <span>Page 3</span>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2"
//                   checked={selectedPages.includes("1")}
//                   onChange={() => handlePageChange("1")}
//                 />
//                 <span>Page 4</span>
//               </div>
//               <button
//                 className="bg-yellow-400 text-white rounded-md py-2 px-4 mt-4"
//                 onClick={() => console.log("Done clicked:", selectedPages)}
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

function App() {
  const [selectedPages, setSelectedPages] = useState([]);

  const handlePageChange = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const handleAllPagesChange = () => {
    if (selectedPages.length === 4) {
      setSelectedPages([]);
    } else {
      setSelectedPages(["Page 1", "Page 2", "Page 3", "Page 4"]);
    }
  };

  const data = [
    {
      id: "page1",
      htmlFor: "page1",
      value: "Page 1",
      label: "Page 1",
    },
    {
      id: "page2",
      htmlFor: "page2",
      value: "Page 2",
      label: "Page 2",
    },
    {
      id: "page3",
      htmlFor: "page3",
      value: "Page 3",
      label: "Page 3",
    },
    {
      id: "page4",
      htmlFor: "page4",
      value: "Page 4",
      label: "Page 4",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 w-[300px] h-auto rounded-md shadow-md bg-white">
        <div className="mb-4 flex items-center justify-between">
          <label
            htmlFor="allPages"
            className="block text-sm font-medium text-gray-700 font-serif"
          >
            All pages
          </label>
          <input
            type="checkbox"
            id="allPages"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
            checked={selectedPages.length === 4}
            onChange={handleAllPagesChange}
          />
        </div>
        <div className="w-full h-[1px] bg-slate-500 mb-6 opacity-20"></div>
        {data.map((page) => (
          <div className="mb-6 flex items-center justify-between" key={page.id}>
            <label
              htmlFor={page.id}
              className="block text-sm font-medium text-gray-700 font-serif"
            >
              {page.value}
            </label>
            <input
              type="checkbox"
              id={page.id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
              checked={selectedPages.includes(page.value)}
              onChange={() => handlePageChange(page.value)}
            />
          </div>
        ))}

        <div className="w-full h-[1px] bg-slate-500 mb-6 opacity-20"></div>
        <button
          className="bg-yellow-500 font-serif  hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          onClick={() => setSelectedPages([])}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
