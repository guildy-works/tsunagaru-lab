import { resources } from "@/resources"
import clsx from "clsx"

export const PlanSheet = () => {

    return (
        <div className="md:hidden p-8 w-full bg-gradient5 backdrop-blur-md">

            <h1 className="text-title1 text-color3 text-center"> チャンネル一覧</h1>

            <div className="flex flex-col gap-12 mt-8">
                {resources.planTable.rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col gap-3 text-white">
                        <h3 className="text-title3 text-color3 text-center">{row.チャンネル名}</h3>

                        <div>
                            <h4 className="text-size3 text-color3">内容</h4>
                            <p className="text-size1 mt-1">{row.内容}</p>
                        </div>

                        <div>
                            <h4 className="text-size3 text-color3">一言</h4>
                            <p className="text-size1 mt-1">{row.一言}</p>
                        </div>

                        <ul className="grid grid-cols-3 w-full bg-color3/80 p-3 rounded-xl">
                            <li className="flex flex-col items-center text-center">
                                <span>フリープラン</span>
                                <span className="">{row.フリープラン}</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <span>ビジネスプラン</span>
                                <span>{row.ビジネスプラン}</span>
                            </li>
                        </ul>

                    </div>
                ))}
            </div>
        </div>
    )
}

export const PlanTable = () => {
    return (
        <div className="bg-gradient1 size-full">
            <div className="p-4 text-center">
                <h1 className="text-[1.2rem]">
                    つながるラボ(Discord内)の各チャンネル一覧
                </h1>
                <h4>プランによってチャンネルの利用が制限されています</h4>
            </div>


            {/* テーブルをラップして横スクロールを有効にする */}
            <table className="w-full">
                <thead className="bg-gradient1 sticky top-0 z-10">
                    <tr>
                        <th
                            className="min-w-[68px] text-center sm:px-4 md:px-6  py-3 text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            チャンネル名
                        </th>
                        <th
                            className="text-center sm:px-4 md:px-6  py-3 text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            内容
                        </th>
                        <th
                            className="text-center sm:px-4 md:px-6  py-3  text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            一言
                        </th>
                        <th
                            className="min-w-[48px] text-center sm:px-4 md:px-6  py-3  text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            フリー
                        </th>
                        <th
                            className="min-w-[48px] text-center sm:px-4 md:px-6  py-3  text-[8px]  sm:text-sm font-medium text-white border-b border-black"
                        >
                            ビジネス
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gradient1">
                    {resources.planTable.rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                rowIndex % 2 === 0
                                    ? "bg-gray-50/60 border-b border-black"
                                    : "bg-gray-50/40 border-b border-black"
                            }
                        >
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-0 text-[8px] sm:text-sm leading-[0.8rem] bg-gray-100 border-r left-0  font-bold border-black">
                                {row.チャンネル名}
                            </td>
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem]  sm:text-sm font-bold border-r border-black">
                                {row.内容}
                            </td>
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold border-r border-black">
                                {row.一言}
                            </td>
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold bg-color3/60 border-r border-black">
                                {row.フリープラン}
                            </td>
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold bg-color2/60 border-r border-black">
                                {row.ビジネスプラン}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
