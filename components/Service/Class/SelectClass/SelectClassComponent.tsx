import React, { FC } from 'react'
import { AutoComplete, Input } from 'antd'

import { Class, useFormationsWithClassesQuery } from '@/generated/graphql'

interface SelectClassProps {
  onSelect: (selectedclass?: Class) => void
}

const SelectClass: FC<SelectClassProps> = props => {
  const { onSelect } = props

  const { data } = useFormationsWithClassesQuery()

  const options = []
  data.formations.forEach(formation => {
    formation.classes.forEach(c => {
      let value = `${formation.name}, ${c.year === 'First' ? '1' : '2'} Année`
      if (c.group !== 'A') value += `, Groupe ${c.group}`
      options.push({ value, selectedclass: c })
    })
  })

  return (
    <AutoComplete
      options={options}
      onChange={(_, option: any) => onSelect(option.selectedclass)}
      filterOption={(inputValue, option) => (
        option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      )}
    >
      <Input.Search placeholder="Choisissez un filière" />
    </AutoComplete>
  )
}

export default SelectClass
