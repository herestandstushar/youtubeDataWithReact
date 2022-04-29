import React from 'react'
import MetaData from '../../data/metadata'
import {Img} from './img'
import {Text} from './text'

export const Dv = () => {
  return (
<div>
<h1>figure 1</h1>
<Img src = {MetaData.dv.bar.imgUrl} /><br/>
<Text text = {MetaData.dv.bar.text} /><br/>
<h1>figure 2</h1>
<Img src = {MetaData.dv.hist.imgUrl} /><br/>
<Text text = {MetaData.dv.hist.text} /><br/>
<h1>figure 3</h1>
<Img src = {MetaData.dv.plot.imgUrl} /><br/>
<Text text = {MetaData.dv.plot.text} /><br/>
</div>
  )
}
