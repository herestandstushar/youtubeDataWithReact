import React from 'react'
import MetaData from '../../data/metadata'
import { Img } from './img'
import { Text } from './text'

export const Da = () => {
  return (
    <div>
    <h1>figure 1</h1>
    <Img src= {MetaData.da.pie.imgUrl} /><br/>
    <Text text = {MetaData.da.pie.text} /><br/>
    <h1>figure 2</h1>
    <Img src = {MetaData.da.title.imgUrl}/><br/>
    <Text text = {MetaData.da.title.text} /><br/>
    <h1>figure 3</h1>
    <Img src = {MetaData.da.High.imgUrl} /><br/>
    <Text text={MetaData.da.High.text} /><br/>
    <h1>figure 4</h1>
    <Img src={MetaData.da.cloud.imgUrl} /><br/>
    <Text text={MetaData.da.cloud.text} /><br/>


    </div>
  )
}
