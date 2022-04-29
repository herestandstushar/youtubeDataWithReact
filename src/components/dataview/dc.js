import React from 'react'
import MetaData from '../../data/metadata'
import {Text} from './text'
import { Img } from './img'


export const Dc = () => {
  return (

    <div>
    <h1>figure 1</h1>
<Img src = {MetaData.correlation.heatmap.imgUrl} /><br/>
<Text text = {MetaData.correlation.heatmap.text} /><br/>
<h1>figure 2</h1>
<Img src = {MetaData.correlation.graph.imgUrl} /><br/>

<Text text = {MetaData.correlation.graph.text} /><br />
<h1>figure 3</h1>
<Img src = {MetaData.correlation.scatter.imgUrl} /><br />
<Text text = {MetaData.correlation.scatter.text} /><br/>
  

    </div>
  )
}

