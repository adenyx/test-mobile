export interface RadioProps {
  value: string
  isChecked: boolean
  onPress: (value: string) => void
  label?: string
}
