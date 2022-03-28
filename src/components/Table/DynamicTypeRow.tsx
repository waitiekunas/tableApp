import { TableElementType } from '../../types/general.types';

type Props = {
  elementType: TableElementType;
  content: string | number;
};

function DynamicTypeRow({ elementType, content }: Props) {
  return elementType === TableElementType.TH ? <th>{content}</th> : <td>{content}</td>;
}

export default DynamicTypeRow;
