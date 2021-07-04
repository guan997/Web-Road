import React from "react"
import * as qs from 'qs';
import {cleanObject} from '../../utils/index';
import { useEffect, useState } from "react"
import {SearchPanel} from './search-panel'
import {List} from './list'
// 根据运行的命令去自动选择读取.env还是.env.development
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    // 负责人列表
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    // 获取项目列表api的数据 :当param改变时获取
    // 使用fetch获取，返回给response
    useEffect(() => {
        // 传搜索对象post 为避免param.name对象为空值，避免歧义
        // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
            console.log(response.ok)
        })
    }, [])
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List list={list} users={users}/>
        </div>
    )
}