export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server.mock');
    server.listen({
      onUnhandledRequest: process.env.CI ? 'bypass' : 'warn',
    });
  } else {
    const { worker } = await import('./browser.mock');
    await worker.start();
  }
}

export default initMocks();

export {};
