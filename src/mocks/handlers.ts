import { http, HttpResponse, delay } from 'msw';

const handlers = [
  http.post('https://example.com/auth/credentials', async ({ request }) => {
    await delay(1000);

    const formData = await request.formData();

    return HttpResponse.json({
      success: true,
      user: {
        email: formData.get('email'),
        name: 'John Doe',
      },
    });
  }),
  http.post('https://example.com/auth/providers/github', async () => {
    await delay(1000);

    return HttpResponse.json({
      success: true,
      user: {
        name: 'John Doe',
      },
    });
  }),
  http.post('https://example.com/auth/providers/google', async () => {
    await delay(1000);

    return HttpResponse.json({
      success: true,
      user: {
        name: 'John Doe',
      },
    });
  }),
];

export default handlers;
