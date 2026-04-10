export type Column<T> = {
  header: string
  key: keyof T
}

type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
}

function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
        </tr>
      </thead>
    </table>
  )
}

export default DataTable