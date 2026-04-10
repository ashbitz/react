import DataTable, { type Column } from './components/DataTable'
import { students } from './data/students'
import type { Student } from './types/student'

const studentColumns: Column<Student>[] = [
  { header: 'ID', key: 'id' },
  { header: 'Nombre', key: 'name' },
  { header: 'Email', key: 'email' },
  { header: 'Curso', key: 'course' },
  { header: 'Activo', key: 'active' },
]

function App() {
  return (
    <main>
      <h1>Laboratorio práctico 3</h1>
      <p>Base inicial del proyecto React con TypeScript.</p>

      <DataTable data={students} columns={studentColumns} />
    </main>
  )
}

export default App