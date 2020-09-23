import React from 'react'
import './styles.css'

import { LaunchListQuery } from '../../generated/graphql'
interface Props {
  data: LaunchListQuery
}

const LaunchList: React.FC<Props> = ({ data }) => {
  return (<div></div>)
}
export default LaunchList