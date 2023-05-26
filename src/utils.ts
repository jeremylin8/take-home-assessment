/* eslint-disable @typescript-eslint/no-explicit-any */
export const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ')

export const toTitleCase = (str: string): string => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())

export const debounce = <F extends(...params: any[]) => void> (func:F, delay = 300) => {
  let timerId = 0
  return (...args: any[]) => {
    clearTimeout(timerId)
    timerId = window.setTimeout(() => func(...args), delay)
  }
}
