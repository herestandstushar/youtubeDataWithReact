import React from 'react'
import MetaData from '../../data/metadata'
import { Text } from './text'
export const DataImpure = () => {
  return (
    <div><Text text = {MetaData.dataImpurities.text} /></div>
  )
}
