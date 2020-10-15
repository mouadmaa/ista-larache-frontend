import { FC } from 'react'
import { ColumnsType } from 'antd/lib/table'
import { Table } from 'antd'

import { Note, Student } from '@/generated/graphql'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'

interface NoteTableProps {
  studentNote: Student
}

interface DataSourceNotes extends Note {
  moduleName: string
}

const NoteTable: FC<NoteTableProps> = props => {
  const { studentNote } = props

  const dataSource = studentNote.notes.map(
    note => ({ ...note, moduleName: note.module.name })
  )

  const columns: ColumnsType<DataSourceNotes> = [
    {
      title: "Module",
      dataIndex: "moduleName",
    },
    {
      title: "Premier Note",
      dataIndex: "note1",
    },
    {
      title: "Deuxième Note",
      dataIndex: "note2",
    },
    {
      title: "Troisième Note",
      dataIndex: "note3",
    },
    {
      title: "Note de l'EFM",
      dataIndex: "efm",
    }
  ]

  return (
    <Table<DataSourceNotes>
      title={() => (
        <HeadingTertiary
          text={`Stagiaire: ${studentNote.fullName}`}
        />
      )}
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 8 }}
      size='middle'
    />
  )
}

export default NoteTable
