import { FC, Fragment } from 'react'
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
      width: '20%',
      fixed: 'left',
    },
    {
      title: "Note 1",
      dataIndex: "note1",
      sorter: (a, b) => a.note1 - b.note1,
      width: '20%',
    },
    {
      title: "Note 2",
      dataIndex: "note2",
      sorter: (a, b) => a.note2 - b.note2,
      width: '20%',
    },
    {
      title: "Note 3",
      dataIndex: "note3",
      sorter: (a, b) => a.note3 - b.note3,
      width: '20%',
    },
    {
      title: "EFM",
      dataIndex: "efm",
      sorter: (a, b) => a.efm - b.efm,
      width: '20%',
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
      scroll={{ x: 600 }}
      size='middle'
      summary={() => (
        <Fragment>
          {studentNote.finalNote1 && (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Note finale de 1 année:</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>{studentNote.finalNote1.toFixed(2)}</Table.Summary.Cell>
            </Table.Summary.Row>
          )}
          {studentNote.finalNote2 && (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Note finale de 2 année:</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>{studentNote.finalNote2.toFixed(2)}</Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        </Fragment>
      )}
    />
  )
}

export default NoteTable
