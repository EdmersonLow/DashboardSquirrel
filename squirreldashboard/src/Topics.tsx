import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
  
export default function Topics() {

    const [topics, setTopics] = useState([[]]);
    const data:any = useLoaderData(); // export the data variable
    
    useEffect(() => {
        let current = [[]], arr = data.data, temp = [];
        console.log(data.data);
        for (let i = 0; i<arr.length; i+=3)
        {
            temp = []
            temp.push(arr[i].question_id);
            temp.push(arr[i].module_name);
            temp.push(arr[i].topic);
            current.push(temp);
        }
        current.shift();
        console.log(current);
        setTopics(current);
    },[data]);
    
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 max-h-secreen">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="ml-7 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >   
                                        Module Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >   
                                        Topic
                                    </th>   
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {topics.map((topic) => (
                                    <tr key={topic[0]}>
                                        <td className="ml-7 px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{topic[1]}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{topic[2]}</div>
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
