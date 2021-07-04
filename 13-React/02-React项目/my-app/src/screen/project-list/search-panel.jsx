import React from "react"
// import { useEffect, useState } from "react"
// 解构赋值
export const SearchPanel = ({users,param, setParam}) => {
    return <form>
        <div>
            {/* setParam(Object.assing({},param,{name:evt.target.value})) */}
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            },10000)}/>
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