import { Button } from '@progress/kendo-react-buttons'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(
    [{name:"홍길동", age:"20", note:"안녕"},
      {name:"이순신", age:"25", note:"니하오"},
      {name:"세종대왕", age:"30", note:"하이"},
    ]
  );
  return (
    <div>
      <Button>캔도 버튼입니다.</Button>
      <Grid data={data}>
        <Column field={"name"} title={"이름"}/>
        <Column field={"age"} title={"나이"}/>
        <Column field={"note"} title={"비고"}/>
      </Grid>
    </div>
  )
}

export default App
