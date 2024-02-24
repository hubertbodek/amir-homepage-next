import type { Table as TableProps } from '@sanity/schemas/blocks/table'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/ui/table'

export default function TableContainer({ title, description, table }: TableProps) {
  const { rows } = table
  const headItems = rows[0]
  const bodyItems = rows.slice(1)

  return (
    <section className="amir-container mx-auto px-4 py-24">
      <h3 className="text-h3 mb-3 text-left font-bold text-gray-900">{title}</h3>
      <p className="mb-10 max-w-prose text-lg">{description}</p>
      <Table>
        <TableHeader>
          <TableRow>
            {headItems.cells.map((cell, index) => (
              <TableHead key={`${cell}-${index}`}>{cell}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bodyItems.map((row, index) => (
            <TableRow key={`row-${index}`}>
              {row.cells.map((cell, index) => (
                <TableCell key={`${cell}-${index}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of your recent invoices.</TableCaption>
      </Table>
    </section>
  )
}
