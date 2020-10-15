import React, { FC } from 'react'
import { Cascader } from 'antd'
import { CascaderOptionType, CascaderValueType } from 'antd/lib/cascader'

import { Formation, useFormationsWithClassesQuery } from '@/generated/graphql'

interface SelectClassProps {
  onSelect: (formationId?: string, classId?: string) => void
}

const SelectClass: FC<SelectClassProps> = props => {
  const { onSelect } = props

  const { data } = useFormationsWithClassesQuery()
  const options = getOptions(data.formations as Formation[])

  const onChange = (value: CascaderValueType) => {
    onSelect(value[0]?.toString(), value[1]?.toString())
  }

  const filter = (inputValue: string, path: CascaderOptionType[]) => {
    return path.some(option => ((option?.label) as string)
      .toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
  }

  return (
    <Cascader
      options={options}
      onChange={onChange}
      showSearch={{ filter }}
      placeholder="Veuillez sélectionner un filière"
      size='large'
    />
  )
}

export default SelectClass

const getOptions = (formations: Formation[]): CascaderOptionType[] => {
  const options: CascaderOptionType[] = []
  formations.forEach(formation => {
    if (!formation.classes.length) return
    const option: CascaderOptionType = {
      value: formation.id,
      label: formation.name,
      children: formation.classes.map(c => ({
        value: c.id,
        label: `${c.year} Year, Group: ${c.group}`
      }))
    }
    options.push(option)
  })
  return options
}
