import React from "react";

export interface User{
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string
};
// 定义形参类型
interface SearchPanelProps{
    users:User[];
    param:{
        name:string;
        personId:string;
    },
    // setParam应该是一个函数类型，void代表无返回，param和什么的param同类型SearchPanelProps['param']
    setParam:(param:SearchPanelProps['param']) => void;
}
// ts希望对每一个函数的形参都要规定类型interface
// 解构赋值
export const SearchPanel = ({users,param, setParam} : SearchPanelProps) => {
    return <form>
        <div>
            {/* setParam(Object.assing({},param,{name:evt.target.value})) */}
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            {/* 选择负责人 */}
            <select 
                value={param.personId} 
                onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {users.map(user => 
                    <option value = {user.id} key = {user.id}>
                        {user.name}
                    </option>)}
            </select>
        </div>
    </form>
}