import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { useTableContext } from "@/context/TableContext";

const TableItem = ({ items, columns }) => {
  const { state } = useTableContext();
  const { sourceUrl } = state;
  const { dispatch } = useTableContext();
  return (
    <table className="w-full text-sm text-left text-black dark:text-black">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns.map((column, i) => {
            return (
              <th key={i} scope="col" className="px-6 py-3">
                {column.colName}
              </th>
            );
          })}
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={`${item.id}`}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            {columns.map((column, i) => {
              return (
                <td key={i} className="px-6 py-4">
                  {typeof column.colObject === "object"
                    ? item[column.colObject[0]][column.colObject[1]]
                    : item[column.colObject]}
                </td>
              );
            })}

            <td className="px-6 py-4 flex items-center ">
              <button
                type="button"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                // onClick={() => setShowModal(true)}
                onClick={() => dispatch({ type: "showModal" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>

              <button
                className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4"
                // onClick={deleteItemHandler}
                onClick={() => {
                  // dispatch({ type: "insertId", value: item.id });
                  dispatch({ type: "showDeleteModal", payload: item.slug });
                }}
                // onClick={() => setShowDeleteModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>

              <Link href={`${sourceUrl}/${item.slug}`} className="items-center">
                <FaEye className="font-medium text-[22px] ml-3 text-yellow-400 dark:text-yellow-300 hover:underline"></FaEye>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableItem;