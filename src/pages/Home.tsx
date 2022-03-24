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

  const filterEvenNumbers = (table: TableData[])=> table.filter(({id})=>id%2===0)
  const filterOddNumbers = (table: TableData[])=> table.filter(({id})=>id%2===1)
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
      <button onClick={()=>setTableData(tableInitialData)}>show all</button>
      <button onClick={()=>setTableData(filterEvenNumbers(tableInitialData))}>show even</button>
      <button onClick={()=>setTableData(filterOddNumbers(tableInitialData))}>show odd</button>

    </div>
  );
};
