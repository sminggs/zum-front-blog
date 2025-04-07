// @ts-nocheck

/**
 * @see {@link https://git.zuminternet.com/adcenter/zum-portal-shoplayer-front-express/blob/master/domain/DataProcessingService.ts}
 * @todo 타입, 테스트 작성
 */

import { ShoppingItem } from '../index.schema';

type ShoppingList = Array<ShoppingItem>;

export const makeBalancedList = (
  list: Array<ShoppingItem>,
  itemPerPage: number,
  exposeFix: boolean = false,
): Array<ShoppingList> => {
  let exposeFixList = [];
  let exposeFixLength = 0;

  const map = list.reduce((obj, box) => {
    if (box.exposeFix == 'Y' && !exposeFix) {
      exposeFixList[box.mallId] = exposeFixList[box.mallId] || [];
      exposeFixList[box.mallId].push(box);
      exposeFixLength++;
    } else {
      obj[box.mallId] = obj[box.mallId] || [];
      obj[box.mallId].push(box);
    }
    return obj;
  }, {});

  const entryCount = Math.ceil((list.length - exposeFixLength) / itemPerPage);
  let size = list.length - exposeFixLength;

  const keys = shuffle(Object.keys(map));

  for (const mapKey in map) {
    map[mapKey] = shuffle(map[mapKey]);
  }
  let newList = Array(entryCount)
    .fill(0)
    .map((v) => []);
  const newListKeys = Array(entryCount)
    .fill(0)
    .map((v) => []);

  // 한 페이지에 같은 쇼핑몰 구좌 겹치지 않게 골고루 뿌려줌
  keys.forEach((key) => {
    const itemSize = map[key].length;
    if (itemSize > 1 && !exposeFix) {
      const indexes = getRandomIndexList(entryCount, Math.min(itemSize, entryCount));
      indexes.forEach((value) => {
        if (newList[value].length < itemPerPage) {
          newList[value][newList[value].length] = map[key].pop();
          size--;
        }
      });
    }
  });

  for (let i = 0, cnt = 0, newListIndex = 0, keySize = keys.length; i < size; i++) {
    let target: number = ++cnt % keySize;

    // 다 차면 다음걸로 ㄱㄱ
    while (newList[newListIndex].length >= itemPerPage) {
      newListIndex++;
    }

    //같은 페이지에 중복 소재가 있는 경우 순서를 뒤로 보냄
    // var mallCheckLimit = 0;
    // while(newListKeys[newListIndex].indexOf(keys[target]) >= 0 && mallCheckLimit <= 20){
    //   keys.push(keys[target]);
    //   keys.splice(target,1);
    //   mallCheckLimit++
    // }

    // key들 계속 돌면서 map에서 빼서 넣을 것 있으면 new list 에 넣고
    if (map[keys[target]].length > 0) {
      newList[newListIndex][newList[newListIndex].length] = map[keys[target]].pop();
      newListKeys[newListIndex].push(keys[target]);
    } else {
      // 넣을게 없으면 i를 줄여서 전체가 다 안들어 갔음을 기록
      i--;
    }
  }

  if (entryCount - 1 === 0) {
    return newList;
  }

  newList = shuffle(newList);

  for (let index = 0, lackPageCount = 0; index < entryCount; index++) {
    let lackList = newList[index];
    // 필요하면 부족한거 채우자
    if (lackList.length < itemPerPage) {
      let lackCount = itemPerPage - lackList.length;
      for (let i = 0; i < lackCount; i++) {
        let listIndex = (i + lackPageCount) % (entryCount - 1);
        let itemIndex = (i + lackPageCount) % (itemPerPage - 1);
        if (listIndex == index) {
          listIndex = (listIndex + 1) % (entryCount - 1);
        }
        lackList.push(newList[listIndex][itemIndex]);
      }
    }
    lackPageCount++;
  }

  // 마지막에 각 페이지 한번 더 섞어주기
  for (var i in newList) {
    newList[i] = shuffle(newList[i]);
  }

  if (!exposeFix)
    newList = newList.concat(
      makeBalancedExposeFixList(
        exposeFixList.filter((_box, index) => {
          if (exposeFixList[index].length % 12 == 0) return false;
          return true;
        }),
        itemPerPage,
      ),
    );
  newList = shuffle(newList);
  return newList;
};

export const shuffle = <T>(array: T[], size?: number): T[] => {
  var index = -1,
    length = array.length,
    lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1)),
      value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }

  index = -1;
  while (++index < size) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1)),
      value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }

  array.length = size;
  return array;
};

const makeBalancedExposeFixList = (
  list: Array<ShoppingList>,
  itemPerPage: number,
): Array<ShoppingList> => {
  let returnList = Array();

  list.forEach((fixedList) => {
    returnList = returnList.concat(makeBalancedList(fixedList, itemPerPage, true));
  });

  return returnList;
};

const getRandomIndexList = (range: number, size: number) => {
  var list = [];
  while (list.length < size) {
    const r = Math.floor(Math.random() * range);
    if (list.indexOf(r) < 0) {
      list.push(r);
    }
  }
  return list;
};
