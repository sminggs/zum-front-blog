import pMap from 'p-map';

export async function runParallelTasks<T extends unknown[]>(
  tasks: { [K in keyof T]: Promise<T[K]> },
  concurrency = Infinity,
): Promise<T> {
  try {
    return (await pMap(tasks, (task) => task, { concurrency })) as T;
  } catch (error) {
    console.error('Error in parallel task execution:', error);
    throw error;
  }
}
