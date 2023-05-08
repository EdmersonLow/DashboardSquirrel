import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
  
export default function Results() {

    const [results, setResults] = useState([[]]);
    const data:any = useLoaderData(); // export the data variable
    
    useEffect(() => {
        let current = [[]], arr = data.data, temp = [];
        console.log(data.data[0]);
        for (let i = 0; i<arr.length; i+=3)
        {
            temp = []
            temp.push(arr[i].result_id);
            temp.push(arr[i].student_id);
            temp.push(arr[i].student_name);
            temp.push(arr[i].module_name);
            temp.push(arr[i].topic);
            temp.push(arr[i].result);
            temp.push(arr[i+1].result);
            temp.push(arr[i+2].result);
            temp.push((arr[i].result+arr[i+1].result+arr[i+2].result));
            current.push(temp);
        }
        current.shift();
        console.log(current);
        setResults(current);
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
                                        Student ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                                    >   
                                        Student Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >   
                                        Module Name
                                    </th>   
                                    <th 
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"  
                                    >   
                                        Topic
                                    </th>
                                    <th 
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"  
                                    >   
                                        Question 1
                                    </th>
                                    <th 
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"  
                                    >   
                                        Question 2
                                    </th>
                                    <th 
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"  
                                    >   
                                        Question 3
                                    </th>
                                    <th 
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"  
                                    >   
                                        Score
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {results.map((result) => (
                                    <tr key={result[0]}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center justify-center">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 text-center">{result[1]}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{result[2]}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{result[3]}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{result[4]}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{result[5]?"✔️":"❌"}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{result[6]?"✔️":"❌"}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{result[7]?"✔️":"❌"}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{result[8]}</div>
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
