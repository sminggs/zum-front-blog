import { rest } from 'msw';
import { Faker, ko, en } from '@faker-js/faker';
import { INTERNAL_API_BASE_URL } from '@repo/services/lib/constants';
import { type Contents } from '@repo/services/com/awszum/hub/internal-api/contents/media/[mediaIdx].schema';

const faker = new Faker({ locale: [ko, en] });

function createContents(length: number) {
  return Array.from({ length }, () => ({
    hubContentIdx: faker.number.int(),
    title: faker.lorem.sentence(),
    subTitle: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    isCard: faker.datatype.boolean(),
    hasMovie: faker.datatype.boolean(),
    thumbUrl: faker.image.urlPicsumPhotos(),
    pcUrl: faker.internet.url(),
    media: {
      mediaIdx: faker.number.int(),
      name: faker.company.name(),
      hubUrl: faker.company.buzzNoun(),
      url: faker.internet.url(),
      socialUrl: faker.internet.url(),
      type: faker.company.name(),
      profile: faker.company.buzzPhrase(),
      image: faker.image.avatar(),
      thumbUrl: faker.image.urlPicsumPhotos(),
    },
  }));
}

export const handlers = [
  rest.get(`${INTERNAL_API_BASE_URL}/contents/media/:mediaIdx`, (req, res, ctx) => {
    const { mediaIdx } = req.params;

    faker.seed(Number(mediaIdx));

    return res(
      ctx.json<Contents>({
        hubContentList: createContents(40),
      }),
    );
  }),
];
