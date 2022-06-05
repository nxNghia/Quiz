import { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Quiz from './components/Quiz';
import SetupForm from './components/SetupForm';

function App() {
    const [isFirst, setIsFirst] = useState(true);
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(10);

    const [questions, setQuestions] = useState([]);

    if (isFirst) {
        return (
          <SetupForm
            setLoading={setLoading}
            setIsFirst={setIsFirst}
            setQuestions={setQuestions}
            amount={amount}
            setAmount={setAmount}
          />
        );
    }
    
    if (loading) {
        return <Loading />;
    }
    return <Quiz questions={questions} amount={amount} setIsFirst={setIsFirst} />;
}

export default App;
