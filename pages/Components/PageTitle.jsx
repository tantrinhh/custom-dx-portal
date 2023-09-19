import React from 'react'

export const PageTitle = ({ title, children }) => {
  return (
    <Helmet>
    <title>{title}</title>
      {children}
  </Helmet>
  )
}
