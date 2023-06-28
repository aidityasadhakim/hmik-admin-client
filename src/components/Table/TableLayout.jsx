import { TableContextProvider } from "@/context/TableContext";
import Table from "./Table";

const TableLayout = ({ columns, urlData, deleteUrl }) => {
  return (
    <TableContextProvider>
      <Table columns={columns} urlData={urlData} deleteUrl={deleteUrl} />
    </TableContextProvider>
  );
};

export default TableLayout;
