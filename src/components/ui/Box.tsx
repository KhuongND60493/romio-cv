import React from 'react'
import { createBox } from '@shopify/restyle'
import { ThemeType } from '@/features/theme'

const BaseBox = createBox<ThemeType>()
type BaseBoxProps = React.ComponentProps<typeof BaseBox>

type BoxDisplay =
  | 'none'
  | 'flex'
  | 'block'
  | 'inline'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'

type BoxGap = BaseBoxProps['gap'] | `${number}rem`
type RemValue = `${number}rem`
type BoxMarginValue = BaseBoxProps['margin'] | RemValue

export interface BoxProps
  extends Omit<
    BaseBoxProps,
    | 'display'
    | 'gap'
    | 'margin'
    | 'marginTop'
    | 'marginRight'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginHorizontal'
    | 'marginVertical'
    | 'm'
    | 'mt'
    | 'mr'
    | 'mb'
    | 'ml'
    | 'mx'
    | 'my'
  > {
  className?: string
  display?: BoxDisplay
  gap?: BoxGap
  margin?: BoxMarginValue
  marginTop?: BoxMarginValue
  marginRight?: BoxMarginValue
  marginBottom?: BoxMarginValue
  marginLeft?: BoxMarginValue
  marginHorizontal?: BoxMarginValue
  marginVertical?: BoxMarginValue
  m?: BoxMarginValue
  mt?: BoxMarginValue
  mr?: BoxMarginValue
  mb?: BoxMarginValue
  ml?: BoxMarginValue
  mx?: BoxMarginValue
  my?: BoxMarginValue
}

const isRemValue = (value: unknown): value is RemValue =>
  typeof value === 'string' && value.endsWith('rem')

export const Box = ({
  display,
  gap,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  className,
  style,
  ...props
}: BoxProps) => {
  const isRemGap = typeof gap === 'string' && gap.endsWith('rem')
  const remMarginStyle = {
    ...(isRemValue(margin) ? { margin } : {}),
    ...(isRemValue(m) ? { margin: m } : {}),
    ...(isRemValue(marginTop) ? { marginTop } : {}),
    ...(isRemValue(mt) ? { marginTop: mt } : {}),
    ...(isRemValue(marginRight) ? { marginRight } : {}),
    ...(isRemValue(mr) ? { marginRight: mr } : {}),
    ...(isRemValue(marginBottom) ? { marginBottom } : {}),
    ...(isRemValue(mb) ? { marginBottom: mb } : {}),
    ...(isRemValue(marginLeft) ? { marginLeft } : {}),
    ...(isRemValue(ml) ? { marginLeft: ml } : {}),
    ...(isRemValue(marginHorizontal) ? { marginInline: marginHorizontal } : {}),
    ...(isRemValue(mx) ? { marginInline: mx } : {}),
    ...(isRemValue(marginVertical) ? { marginBlock: marginVertical } : {}),
    ...(isRemValue(my) ? { marginBlock: my } : {}),
  } as any

  return (
    <BaseBox
      {...props}
      {...({ className } as any)}
      gap={isRemGap ? undefined : (gap as BaseBoxProps['gap'])}
      margin={isRemValue(margin) ? undefined : (margin as BaseBoxProps['margin'])}
      marginTop={isRemValue(marginTop) ? undefined : (marginTop as BaseBoxProps['marginTop'])}
      marginRight={isRemValue(marginRight) ? undefined : (marginRight as BaseBoxProps['marginRight'])}
      marginBottom={isRemValue(marginBottom) ? undefined : (marginBottom as BaseBoxProps['marginBottom'])}
      marginLeft={isRemValue(marginLeft) ? undefined : (marginLeft as BaseBoxProps['marginLeft'])}
      marginHorizontal={
        isRemValue(marginHorizontal) ? undefined : (marginHorizontal as BaseBoxProps['marginHorizontal'])
      }
      marginVertical={isRemValue(marginVertical) ? undefined : (marginVertical as BaseBoxProps['marginVertical'])}
      m={isRemValue(m) ? undefined : (m as BaseBoxProps['m'])}
      mt={isRemValue(mt) ? undefined : (mt as BaseBoxProps['mt'])}
      mr={isRemValue(mr) ? undefined : (mr as BaseBoxProps['mr'])}
      mb={isRemValue(mb) ? undefined : (mb as BaseBoxProps['mb'])}
      ml={isRemValue(ml) ? undefined : (ml as BaseBoxProps['ml'])}
      mx={isRemValue(mx) ? undefined : (mx as BaseBoxProps['mx'])}
      my={isRemValue(my) ? undefined : (my as BaseBoxProps['my'])}
      style={[
        style,
        display ? ({ display } as any) : undefined,
        isRemGap ? ({ gap } as any) : undefined,
        remMarginStyle,
      ] as any}
    />
  )
}
