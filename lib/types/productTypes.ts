export interface ProductListProps {
  framework: Product[];
  setValue?: any;
  value?: any;
  id?: any;
}

export interface Product {
  value: string;
  label: string;
}
