import { rest } from 'msw';
import { Faker, ko } from '@faker-js/faker';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { type Contents } from '@repo/services/com/awszum/hub/internal-api/contents/count/[mediaIdx].schema';

const faker = new Faker({ locale: [ko] });

export const handlers = [
  rest.get(`${INTERNAL_API_BASE_URL}/contents/count/:mediaIdx`, (req, res, ctx) => {
    const { mediaIdx } = req.params;

    faker.seed(Number(mediaIdx));

    return res(
      ctx.json<Contents>({
        countItem: faker.number.int({ min: 1, max: 10_000 }),
      }),
    );
  }),
];
