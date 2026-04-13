import DataTable, { type Column } from './components/DataTable'
import { students } from './data/students'
import type { Student } from './types/student'
import { useState } from 'react'
import { calcularDiferenciaEnDias } from './utils/date-utils'

const studentColumns: Column<Student>[] = [
  { header: 'ID', key: 'id' },
  { header: 'Nombre', key: 'name' },
  { header: 'Email', key: 'email' },
  { header: 'Curso', key: 'course' },
  { header: 'Activo', key: 'active' },
]

function App() {
  const [editingStudent, setEditingStudent] = useState<Partial<Student>>({
    name: 'Elliot Alderson',
  })

  const diasDeDiferencia = calcularDiferenciaEnDias(
  new Date('2026-04-01'),
  new Date('2026-04-13')
)
  
  return (
    <main>
      <h1>Laboratorio práctico 3</h1>
      <p>Base inicial del proyecto React con TypeScript.</p>

      <DataTable data={students} columns={studentColumns} />
      <pre>{JSON.stringify(editingStudent, null, 2)}</pre>
      <button
  onClick={() =>
    setEditingStudent({
      name: 'Darlene Alderson',
      email: 'darlene@example.com',
    })
  }
>
  Cambiar estudiante en edición
</button>
<p>Diferencia en días: {diasDeDiferencia}</p>
    </main>
  )
}

export default App