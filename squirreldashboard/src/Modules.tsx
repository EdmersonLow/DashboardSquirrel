import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
  
export default function Modules() {

    const [users, setUsers] = useState([]);
    const data:any = useLoaderData(); // export the data variable
    
    useEffect(() => {
        setUsers(data.data);
    },[data]);
    
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                    >
                                        Module ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                    >   
                                        Module Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.module_id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center justify-center">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 text-center">{user.module_id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{user.module_name}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>          
    )
}
