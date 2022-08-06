import React from "react";

// TODO: linter
export const QuizCard: React.FunctionComponent<{ title: string, img: string} > = ({ title = '', img = '' }) => {
    return (
        <article
            className=""
        >
            <img src="https://picsum.photos/300/200" alt="colors" />
        </article>
    );
}