export interface  DropDownProps {
  label?: string;
  id?: string;
  options: any[];
  valueProp: string;
  optionLabelProp: string;
  value?: string;
  onChange: (event: string) => void;
}
