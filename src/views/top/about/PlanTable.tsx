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
                                <span>スモールプラン</span>
                                <span>{row.スモールプラン}</span>
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
        <div className="hidden md:block bg-gradient1 size-full">
            {/* テーブルをラップして横スクロールを有効にする */}
            <table className="table-auto w-full">
                <thead className="bg-gradient1 sticky top-0 z-10">
                    <tr>
                        <th
                            scope="col"
                            className={clsx(
                                "bg-fuchsia-600 sticky left-0",
                                "min-w-24 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                            )}
                        >
                            チャンネル名
                        </th>
                        <th
                            scope="col"
                            className="min-w-24 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                        >
                            内容
                        </th>
                        <th
                            scope="col"
                            className="min-w-24 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                        >
                            一言
                        </th>
                        <th
                            scope="col"
                            className="min-w-44 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                        >
                            フリー
                        </th>
                        <th
                            scope="col"
                            className="min-w-44 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                        >
                            スモール
                        </th>
                        <th
                            scope="col"
                            className="min-w-44 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px]  sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
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
                                    ? "bg-gray-50/80 border-b border-color1/50"
                                    : "bg-gray-50/70 border-b border-color1/50"
                            }
                        >
                            <td className={clsx(
                                rowIndex % 2 === 0
                                    ? "bg-gray-50 border-color1/50"
                                    : "bg-gray-50 border-color1/50",
                                "px-1 sm:px-4 md:px-6 py-4 text-[8px] sm:text-sm  sticky border-r left-0  font-bold"
                            )}>
                                {row.チャンネル名}
                            </td>
                            <td className="px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold ">
                                {row.内容}
                            </td>
                            <td className="px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold">
                                {row.一言}
                            </td>
                            <td className="text-center px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold bg-color3/60">
                                {row.フリープラン}
                            </td>
                            <td className="text-center px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold bg-amber-500/60">
                                {row.スモールプラン}
                            </td>
                            <td className="text-center px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold bg-color2/60">
                                {row.ビジネスプラン}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
