import React from 'react';
const Table = (props) => {
    const {characterData,removeCharacter} = props;
    return (
        <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}
// class Table extends Component {
//     render() {
//         // this.props访问所有数据，所有值传递一个props，characterData，
//         // 所以我们使用this.props.characterData来检索该数据
//         const {characterData} = this.props;
//         return (
//             // 分离header和tbody
//             // <table>
//             //     <thead>
//             //         <tr>
//             //             <th>Name</th>
//             //             <th>Job</th>
//             //         </tr>
//             //     </thead>
//             //     <tbody>
//             //         <tr>
//             //             <td>Charlie</td>
//             //             <td>Janitor</td>
//             //         </tr>
//             //         <tr>
//             //             <td>Mac</td>
//             //             <td>Bouncer</td>
//             //         </tr>
//             //         <tr>
//             //             <td>Dee</td>
//             //             <td>Aspiring actress</td>
//             //         </tr>
//             //         <tr>
//             //             <td>Dennis</td>
//             //             <td>Bartender</td>
//             //         </tr>
//             //     </tbody>
//             // </table>
//             <table>
//                 <TableHeader/>
//                 <TableBody characterData={characterData}/>
//             </table>
//         )
//     }
// }
const TableHeader=()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
        // 把tbody中的数据改为props来处理
        // <tbody/>
        // 将props作为参数传递，并通过map()映射到数组中的每个对象到rows变量中然后将其作为表达式返回
        const rows = props.characterData.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td>
                        <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    </td>
                </tr>
            )
        })
    return <tbody>{rows}</tbody>
        // <tbody>
        //     <tr>
        //         <td>Charlie</td>
        //         <td>Janitor</td>
        //     </tr>
        //     <tr>
        //         <td>Mac</td>
        //         <td>Bouncer</td>
        //     </tr>
        //     <tr>
        //         <td>Dee</td>
        //         <td>Bouncer</td>
        //     </tr>
        // </tbody>
}
export default Table;