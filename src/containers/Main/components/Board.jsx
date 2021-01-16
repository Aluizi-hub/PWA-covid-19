/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={661} label="Confirmados" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={90} label="Isolamento" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={4} label="Internados" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={14} label="Óbtios" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={553} label="Recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)