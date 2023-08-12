import { PropsWithChildren } from 'react'
import { cx, css } from 'styled-system/css'
import { grid, gridItem } from 'styled-system/patterns'

const footer = grid({
  gap: 8,
  columns: {
    mdTo2xl: 2,
    smDown: 1,
  },
  borderTopWidth: '1px',
  _dark: {
    borderTopColor: 'slate.800',
  },
  _light: {
    borderTopColor: 'slate.300',
  },
  minH: '8rem',
  alignItems: 'center',
  p: '2rem',
})

export function Footer({ children }: PropsWithChildren) {
  return <footer className={footer}>{children}</footer>
}

const typography = css({
  _dark: {
    color: 'slate.400',
  },
  _light: {
    color: 'slate.600',
  },
})
const leftElement = gridItem({
  display: 'flex',
  justifyContent: {
    mdTo2xl: 'flex-start',
    smDown: 'center',
  },
  color: 'slate.400',
})
const rightElement = gridItem({
  display: 'flex',
  justifyContent: {
    mdTo2xl: 'flex-end',
    smDown: 'center',
  },
  color: 'slate.400',
})
function LeftElement({ children }: PropsWithChildren) {
  return <div className={cx(leftElement, typography)}>{children}</div>
}
function RightElement({ children }: PropsWithChildren) {
  return <div className={cx(rightElement, typography)}>{children}</div>
}

Footer.LeftElement = LeftElement
Footer.RightElement = RightElement
