import React from "react"
export const List = ({ users, list }) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    {/* 不含personname需要用personid渲染 从user中找personid */}
                    {/* 如果找不到值很有可能变成undefined */}
                    {/* ?.表示 如果前面表达式为undefined则整个表达式都是undefined，故不会报任何错误 */}
                    {/* 为undefined时默认值为未知 */}
                    <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
                </tr>)
            }
        </tbody>
    </table>
}