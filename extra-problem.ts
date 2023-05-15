interface IDataExample {
  [key: string]: IData
}
type IResultExample = IData[]
interface IData {
  fails: number
  gameId: string
  playTime: number
  wins: number
}

const dataExample: IDataExample = {
  'archery-mission-lvl': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 5291.706,
    wins: 8,
  },
  'archery-world-mission-1': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 981,
    wins: 6,
  },
  'bubble-woods-mission-1': {
    fails: 19,
    gameId: 'bubble-woods',
    playTime: 1206,
    wins: 9,
  },
  'bubble-woods-mission-lvl': {
    fails: 1,
    gameId: 'bubble-woods',
    playTime: 100,
    wins: 2,
  },
  'candy-bubble-mission-lvl': {
    fails: 6,
    gameId: 'candy-bubble',
    playTime: 1558,
    wins: 6,
  },
}

const resultExample: IResultExample = [
  {
    fails: 18,
    gameId: 'archery-world-tour',
    playTime: 6272.706,
    wins: 14,
  },
  {
    fails: 20,
    gameId: 'bubble-woods',
    playTime: 1306,
    wins: 11,
  },
  {
    fails: 6,
    gameId: 'candy-bubble',
    playTime: 1558,
    wins: 6,
  },
]

const getGroupedResults = (input: IDataExample): IResultExample => {
  const values = Object.values(input)
  return values.reduce((prev: IData[], item: IData) => {
    const existingItem = prev.find((el) => el.gameId === item.gameId)
    if (existingItem) {
      // I used a new object for sorting fields, as shown in the example.
      // I didn't understand the requirement: "the output is the same as the example above".
      // Otherwise, I would have used the following approach:
      //
      // return prev.map((el) =>
      //   el.gameId === existingItem.gameId
      //     ? {
      //         ...existingItem,
      //         fails: existingItem.fails + item.fails,
      //         playTime: existingItem.playTime + item.playTime,
      //         wins: existingItem.wins + item.wins,
      //       }
      //     : el,
      // )
      const newItem: IData = {
        fails: existingItem.fails + item.fails,
        gameId: item.gameId,
        playTime: existingItem.playTime + item.playTime,
        wins: existingItem.wins + item.wins,
      }
      return prev.map((el) => (el.gameId === newItem.gameId ? newItem : el))
    }
    return [...prev, item]
  }, [] as IData[])
}

const result = getGroupedResults(dataExample)

console.log('RESULT: ', result)
console.log(
  'IS THE SAME: ',
  JSON.stringify(result.sort((a, b) => (a.playTime > b.playTime ? 1 : -1))) ===
    JSON.stringify(
      resultExample.sort((a, b) => (a.playTime > b.playTime ? 1 : -1)),
    ),
)
