export function TaskList() {
    return (
        <div className="flex mx-4 justify-center ">
            <table className="w-full ">
                <caption className="caption-top font-medium text-lg">
                    List of Tasks
                </caption>
                <thead className="border-solid border-b-2 border-purple-700">
                    <tr className="underline">
                        <th className="py-2">Task id.</th>
                        <th className="py-2">Task title.</th>
                        <th className="py-2">Compeleted?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-2 border-purple-700">
                        <td className="justify-center py-8 text-center ">
                            <p>1.</p>
                        </td>
                        <td className="justify-center py-8 text-center">
                            <p className="text-wrap">
                                Cleaning the bathroom Cleaning the bathroom
                            </p>
                        </td>
                        <td className="justify-center py-8 text-center">
                            <input type="checkbox" />
                        </td>
                    </tr>

                    <tr className="">
                        <td className="justify-center py-8 text-center ">
                            <p>2.</p>
                        </td>
                        <td className="justify-center py-8 text-center">
                            <p className="text-wrap">
                                Cleaning the hall Cleaning the hall
                            </p>
                        </td>
                        <td className=" justify-center py-8 text-center">
                            <input type="checkbox" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
