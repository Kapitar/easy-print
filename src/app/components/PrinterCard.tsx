export default function PrinterCard() {
  return (
    <>
      <div className="printer-info">
        <h1 className="text-3xl text-blue-500">Printer 1</h1>
        <p className="text-slate-500">Room 1002</p>
        <p className="text-slate-500 mt-5">Currently printing: 35 pages</p>
      </div>
      <div className="printer-upload">
        <label className="text-base text-slate-900 font-medium block mb-2">
          Upload file
        </label>
        <input
          type="file"
          className="w-full text-slate-500 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-slate-500 rounded"
        />
        <p className="text-xs text-slate-500 mt-2">PDF, PNG, and JPG Allowed</p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Print
        </button>
      </div>
    </>
  );
}
