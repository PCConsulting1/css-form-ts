import Container from '@mui/material/Container'
import { PropsWithChildren } from 'react'

export default function ListContainer({ children }: PropsWithChildren) {
  return (
    <Container
      sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
    >
      {children}
    </Container>
  )
}
