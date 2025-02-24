import { useState, useEffect } from 'react';

// Интерфейс для данных теста
interface TestCardProps {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'draft';
}

// Компонент карточки теста
const TestCard: React.FC<TestCardProps> = ({ title, description, status }) => {
  const statusClasses: Record<TestCardProps['status'], string> = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
    draft: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${statusClasses[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [tests, setTests] = useState<TestCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setIsLoading(true);
        // Имитация загрузки данных
        const response = await new Promise<TestCardProps[]>((resolve) =>
          setTimeout(
            () =>
              resolve([
                { id: '1', title: 'Test A', description: 'Description A', status: 'active' },
                { id: '2', title: 'Test B', description: 'Description B', status: 'completed' },
                { id: '3', title: 'Test C', description: 'Description C', status: 'draft' },
              ]),
            1000
          )
        );

        setTests(response);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Something went wrong'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchTests();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Active A/B Tests</h2>
      {isLoading ? (
        <div className="text-center">Загрузка...</div>
      ) : error ? (
        <div className="text-red-500">{error.message}</div>
      ) : tests.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <TestCard key={test.id} {...test} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center">Нет активных тестов</div>
      )}
    </div>
  );
};

export default Dashboard;
