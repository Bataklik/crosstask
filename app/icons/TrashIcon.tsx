import * as React from "react";
export const TrashIcon = (
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        data-testid={`TrashIcon ` + props["aria-label"]}
        stroke="#000"
        viewBox="0 0 24 24"
        {...props}
    >
        <g
            stroke="#8B4DE6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <path d="M10 12v5M14 12v5M4 7h16M6 10v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z" />
        </g>
    </svg>
);
