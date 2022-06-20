import {AnonymousLayout, LoggedLayout, QuizLayout} from 'components/layouts';
import {Login, Register} from 'features/Auth';
import { AuthContextProvider } from 'features/Auth/Auth.context';
import { Route, Routes } from 'react-router-dom';
import {NotFound} from "./components/Pages/NotFound";
import {Landing} from "./components/Pages/Landing";
import {Menu} from "./components/Menu";
import {Quizzes} from "./components/Pages/Quizzes";
import {Quiz} from "./components/Pages/Quiz";
import {CreateQuiz} from "./components/Pages/CreateQuiz";


function App() {
  return (
    <AuthContextProvider>
      <Menu />
          <Routes>
            <Route element={<AnonymousLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
              <Route element={<LoggedLayout />}>
                    <Route path="/dashboard" element={<Landing />} />
                    <Route path="/quizzes" element={<QuizLayout />}>
                        <Route index element={<Quizzes />} />
                        <Route path=":quizId" element={<Quiz />} />
                        <Route path="new" element={<CreateQuiz />} />
                    </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
    </AuthContextProvider>
  );
}

export default App;
