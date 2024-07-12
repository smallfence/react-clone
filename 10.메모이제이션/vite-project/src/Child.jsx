import { memo } from "react";

const Child = ({childAge, childName}) => {
    console.log("자식 실행");
    return (<div>
        <p>자식나이 : {childAge.age}</p>
        <p>자식이름 : {childName.name}</p>
    </div>)
}
export default memo(Child);