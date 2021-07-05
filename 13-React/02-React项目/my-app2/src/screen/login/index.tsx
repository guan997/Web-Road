import React, { FormEvent } from 'react';

// 根据运行的命令去自动选择读取.env还是.env.development
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
//     TS的类型继承

// TS是鸭子类型(duck typing)，面向接口编程而不是面向对象

// 如果不给默认类型，就强制让你给泛型，ceneric type ‘formevent’ requires 1 type argument

// [json-server](https://github.com/typicode/json-server)的最大限制就是只能模拟标准的rest api
    const login = (param:{username:string,password:string}) => {
        fetch(`${apiUrl}/login`, {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(param)
        }).then(
            async(response:Response) => {
                if(response.ok){
                    // setList(await response.json());
                }
            }
        )
    }

    // ts中具有类型兼容
    // HTMLFormElement extends Element
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        login({username,password})
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={'password'} />
        </div>
        <button type={'submit'}>登录</button>
    </form>
}