import React from 'react'
import MetaData from '../../data/metadata'
import {Dc} from './dc'
import { Dv } from './dv'
import { Da } from './da'
import { DataImpure } from './dataimpure'


export const Core = ({match}) => {

  const part = match.params.dataId.toLowerCase()
  if (part === 'correlation') {
return(
  <Dc />
)
  }
console.log(part)
  if (part ==='data visualization'){
    return(
      <Dv />
    )
  }
  if (part ==='data analysis'){
    return(
      <Da/>
    )
  }

  if (part==='data impurities'){
    return(
      <DataImpure />
    )
  }

  return (
    <div>
    <img src ='../../../public/images/download.png' onError={(e)=>{
      e.target.src = 'https://static.toiimg.com/photo/88221879.cms'
    }} wiedth = '400px' height='400px' alt = 'not'/>
      <p>{MetaData.correlation.heatmap.text}</p>
    </div>
  )
  }
