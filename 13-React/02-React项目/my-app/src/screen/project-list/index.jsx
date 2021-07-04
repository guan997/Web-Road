import React from "react"
import * as qs from 'qs';
import {cleanObject,useMount,useDebounce} from '../../utils/index';
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
    });
    const [list, setList] = useState([]);
    // 利用useDebounce快速处理事件，减少请求
    const debouncedParam = useDebounce(param, 2000);
    // 获取项目列表api的数据 :当param改变时获取
    // 使用fetch获取，返回给response
    useEffect(() => {
        // 传搜索对象post 为避免param.name对象为空值，避免歧义
        // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])
    // useEffect(() => {
    //     fetch(`${apiUrl}/users`).then(async response => {
    //         if (response.ok) {
    //             setUsers(await response.json())
    //         }
    //     })
    // }, [])//只在页面加载时执行一次 初始化，如果不想看到满屏空数组和useEffect，把useEffect抽象出来
    // 避免加载时有空数组
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })
    // useDebounce
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List list={list} users={users}/>
        </div>
    )
}