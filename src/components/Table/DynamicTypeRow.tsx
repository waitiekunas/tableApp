import { TableElementType } from '../../types/general.types';

type Props = {
  elementType: TableElementType;
  children: React.ReactNode;
};

function DynamicTypeRow({ elementType, children }: Props) {
  return elementType === TableElementType.TH ? <th>{children}</th> : <td>{children}</td>;
}

export default DynamicTypeRow;
