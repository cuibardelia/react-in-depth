import {QuizCard} from "../styled-components/QuizCard";

export const Quizzes: React.FunctionComponent = () => {
    return (
        <div className="max-w-[75%]">
            <h1 className="text-6xl font-bold text-quiz-purple">Quizzes</h1>
            <h2 className="text-3xl text-sky-200">A list of quizzes will be reported here, if any &#128119;</h2>
            <main className="grid grid-cols-3 gap-9">
                {[1, 2, 3, 4].map((quiz, index) => (
                    <QuizCard key={index} title={''} img={''} />
                ))}
            </main>
        </div>
    )
}