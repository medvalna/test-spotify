import Papa from 'papaparse'

export const parseSongs = () => {
  Papa.parse('./spotify-songs.csv', {
    header: true,
    complete: (results) => {
      console.log(results.data)
    },
  })
}
