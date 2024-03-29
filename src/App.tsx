import {AnonymousLayout, LoggedLayout, QuizLayout} from 'layouts';
import {Login, Register} from 'features/Auth';
import { AuthContextProvider } from 'features/Auth/Auth.context';
import { Route, Routes } from 'react-router-dom';
import {NotFound} from "./components/Pages/NotFound";
import {Menu} from "./components/Menu";
import {Quizzes} from "./components/Pages/Quizzes";
import {Quiz} from "./components/Pages/Quiz";
import {CreateQuiz} from "./components/Pages/CreateQuiz";


function App() {

    // TODO: stories for all components - inputs, buttons, logo,
    // TODO: create nav
  return (
    <AuthContextProvider>
      <Menu />
          <Routes>
            <Route  path="/" element={<AnonymousLayout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
              <Route element={<LoggedLayout />}>
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
