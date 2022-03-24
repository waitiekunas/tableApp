import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectTableData } from '../store/selectors/api.selectors';
import { TableData } from '../types/api.types';

export const Home: React.FC = () => {
  const tableInitialData = useSelector(selectTableData)
  const [tableData, setTableData] = useState<TableData[]>([])
  useEffect(()=>{
    setTableData(tableInitialData)
  },[tableInitialData])

  return (
    <div className="CenteredFlex">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => (
            <tr key={`${index}_${value.name}`}>
              <td>{value.id}</td>
              <td>{value.name}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};
