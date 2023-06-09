import api from 'libs/api'
import { vi } from 'vitest'
import { searchMovies } from '.'
const mockedApi = api as jest.Mocked<typeof api>

vi.mock('libs/api')

const apiRes = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/mUC2BS04DlszdqJQ9vz9MFuPiDd.jpg',
      genre_ids: [16, 28, 14],
      id: 20982,
      original_language: 'ja',
      original_title: '劇場版 NARUTO -ナルト- 疾風伝',
      overview:
        'Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto\'s mission is to guard Shion, but she predicts Naruto\'s death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this "prediction of death."',
      popularity: 74.942,
      poster_path: '/vDkct38sSFSWJIATlfJw0l3QOIR.jpg',
      release_date: '2007-08-04',
      title: 'Naruto Shippuden the Movie',
      video: false,
      vote_average: 7.243,
      vote_count: 691
    },
    {
      adult: false,
      backdrop_path: '/Abv3ZtGV2NXxPimArb3LDLg2bDH.jpg',
      genre_ids: [53, 16, 28, 35, 27, 9648],
      id: 75624,
      original_language: 'ja',
      original_title: '劇場版 NARUTO -ナルト- ブラッド・プリズン',
      overview:
        "After his capture for attempted assassination of the Raikage, leader of Kumogakure, as well as killing Jōnin from Kirigakure and Iwagakure, Naruto is imprisoned in Hōzukijou: A criminal containment facility known as the Blood Prison. Mui, the castle master, uses the ultimate imprisonment technique to steal power from the prisoners, which is when Naruto notices his life has been targeted. Thus begins the battle to uncover the truth behind the mysterious murders and prove Naruto's innocence.",
      popularity: 48.545,
      poster_path: '/4WT7zYFpe0fsbg6TitppiHddWAh.jpg',
      release_date: '2011-07-30',
      title: 'Naruto Shippuden the Movie: Blood Prison',
      video: false,
      vote_average: 7.286,
      vote_count: 506
    },
    {
      adult: false,
      backdrop_path: '/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg',
      genre_ids: [28, 10749, 16],
      id: 317442,
      original_language: 'ja',
      original_title: 'THE LAST -NARUTO THE MOVIE-',
      overview:
        'Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.',
      popularity: 50.007,
      poster_path: '/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg',
      release_date: '2014-12-06',
      title: 'The Last: Naruto the Movie',
      video: false,
      vote_average: 7.743,
      vote_count: 1676
    }
  ],
  total_pages: 1,
  total_results: 3
}

describe('Movies api', () => {
  describe('searchMovies', () => {
    it('shoudl return movies with searched query ', async () => {
      mockedApi.get.mockResolvedValue({
        data: apiRes
      })

      const movies = await searchMovies('naruto', 1)

      expect(api.get).toHaveBeenCalledWith('/search/movie?query=naruto&page=1')
      expect(movies).toEqual(apiRes)
    })
  })

  describe('when API call fails', () => {
    it('should return network error', async () => {
      const message = 'Network Error'
      mockedApi.get.mockRejectedValue(new Error(message))

      try {
        await searchMovies('naruto', 1)
      } catch (e) {
        expect(e).toMatchObject(new Error(message))
      }

      expect(api.get).toHaveBeenCalledWith(`/search/movie?query=naruto&page=1`)
    })
  })
})
