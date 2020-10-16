import { FC, Fragment } from 'react'
import { ColumnsType } from 'antd/lib/table'
import { Table } from 'antd'

import { Class, PublicStudent, usePublicStudentsQuery } from '@/generated/graphql'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'

interface registerTableProps {
  selectedclass: Class
}

const RegisterTable: FC<registerTableProps> = props => {
  const { selectedclass } = props

  const { data, loading } = usePublicStudentsQuery({
    variables: { classId: selectedclass.id }
  })

  const columns: ColumnsType<PublicStudent> = [
    {
      title: "Nom complet",
      dataIndex: "fullName",
      width: '50%',
    },
    {
      title: "CIN",
      dataIndex: "cin",
    },
    {
      title: "CEF",
      dataIndex: "cef",
    },
  ]

  return (
    <Table<PublicStudent>
      title={() => (
        <Fragment>
          {!data?.publicStudents.length && (
            <HeadingTertiary
              text="Il n'y a stagiaire dans cette filière ou pas encore ajouté!"
            />
          )}
        </Fragment>
      )}
      columns={columns}
      dataSource={data?.publicStudents || []}
      loading={loading}
      pagination={{ pageSize: 8 }}
      scroll={{ x: 600 }}
      size='middle'
    />
  )
}

export default RegisterTable
