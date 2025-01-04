import { resources } from "@/resources"
import clsx from "clsx"

export const PlanTable = () => {
    return (
        <div className="bg-gradient1 size-full">
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
                            className="min-w-14 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                        >
                            フリー
                        </th>
                        <th
                            scope="col"
                            className="min-w-14 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px] sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
                        >
                            スモール
                        </th>
                        <th
                            scope="col"
                            className="min-w-14 z-50 px-1 sm:px-4 md:px-6  py-3 text-left text-[8px]  sm:text-sm font-medium text-white uppercase tracking-wider border-b border-gray-200"
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
                            <td className="px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold bg-color3/60">
                                {row.フリープラン}
                            </td>
                            <td className="px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold bg-amber-500/60">
                                {row.スモールプラン}
                            </td>
                            <td className="px-1 sm:px-4 md:px-6 py-4 text-[8px]  sm:text-sm font-bold bg-color2/60">
                                {row.ビジネスプラン}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
