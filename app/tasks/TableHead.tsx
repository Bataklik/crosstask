export function TableHead() {
    return (
        <thead className="border-solid border-b-2 border-purple-700">
            <tr className="underline">
                <th className="py-2">Task id.</th>
                <th className="py-2">Task title.</th>
                <th className="py-2">Completed?</th>
            </tr>
        </thead>
    );
}
