export default function Queue() {
  return (
    <div className="relative max-h-32 overflow-y-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Dec 17, 2024 13:01
            </th>
            <td className="px-6 py-4">Artem Kim</td>
            <td className="px-6 py-4">Pending</td>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Dec 17, 2024 13:01
            </th>
            <td className="px-6 py-4">Artem Kim</td>
            <td className="px-6 py-4">Done</td>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Dec 17, 2024 13:01
            </th>
            <td className="px-6 py-4">Artem Kim</td>
            <td className="px-6 py-4">Done</td>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Dec 17, 2024 13:01
            </th>
            <td className="px-6 py-4">Artem Kim</td>
            <td className="px-6 py-4">Done</td>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Dec 17, 2024 13:01
            </th>
            <td className="px-6 py-4">Artem Kim</td>
            <td className="px-6 py-4">Done</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
