import { resources } from "@/resources"
import clsx from "clsx"

export const PlanTable = () => {
    return (
        <div className="bg-gradient1 size-full">
            {/* テーブルをラップして横スクロールを有効にする */}
            <table className="table-auto size-full min-w-[600px]">
                <thead className="bg-gradient1 sticky top-0">
                    <tr>
                        {resources.planTable.header.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                className=" px-2 sm:px-4 md:px-6 min-w-32 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-gray-200"
                            >
                                {header}
                            </th>
                        ))}
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
                                "px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-700 sticky border-r left-0"
                            )}>
                                {row.チャンネル名}
                            </td>
                            <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-700">
                                {row.内容}
                            </td>
                            <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-700">
                                {row.一言}
                            </td>
                            <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-700 bg-color3/60">
                                {row.フリープラン}
                            </td>
                            <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-700 bg-amber-500/60">
                                {row.スモールプラン}
                            </td>
                            <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-700 bg-color2/60">
                                {row.ビジネスプラン}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
