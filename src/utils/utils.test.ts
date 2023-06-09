import { generatePageUrl, generatePagination, generatePosterUrl } from '.'

describe('Utils', () => {
  describe('generatePosterUrl', () => {
    it('should return poster url default to original size', async () => {
      const url = generatePosterUrl('/asd.png')

      expect(url).toContain('original')
    })

    it('should return poster url with w500 size', async () => {
      const url = generatePosterUrl('/asd.png', 'w500')

      expect(url).toContain('w500')
    })

    it('should return poster url default to original size', async () => {
      const url = generatePosterUrl('/asd.png', 'w780')

      expect(url).toContain('w780')
    })
  })

  describe('generatePagination', () => {
    it('should return array of object that start from page 1', async () => {
      const paginationList = generatePagination(
        'http://test.com/search?q=naruto&p=1',
        100,
        1,
        10,
        10
      )

      expect(paginationList).toEqual([
        { page: 1, pageUrl: 'http://test.com/search?q=naruto&p=1' },
        { page: 2, pageUrl: 'http://test.com/search?q=naruto&p=2' },
        { page: 3, pageUrl: 'http://test.com/search?q=naruto&p=3' },
        { page: 4, pageUrl: 'http://test.com/search?q=naruto&p=4' },
        { page: 5, pageUrl: 'http://test.com/search?q=naruto&p=5' },
        { page: 6, pageUrl: 'http://test.com/search?q=naruto&p=6' },
        { page: 7, pageUrl: 'http://test.com/search?q=naruto&p=7' },
        { page: 8, pageUrl: 'http://test.com/search?q=naruto&p=8' },
        { page: 9, pageUrl: 'http://test.com/search?q=naruto&p=9' },
        { page: 10, pageUrl: 'http://test.com/search?q=naruto&p=10' }
      ])
    })

    it('should return array of object that end to page 2', async () => {
      const paginationList = generatePagination(
        'http://test.com/search?q=naruto&p=1',
        20,
        1,
        10,
        10
      )

      expect(paginationList).toEqual([
        { page: 1, pageUrl: 'http://test.com/search?q=naruto&p=1' },
        { page: 2, pageUrl: 'http://test.com/search?q=naruto&p=2' }
      ])
    })

    it('should return empty array with totalItems is 0', async () => {
      const paginationList = generatePagination(
        'http://test.com/search?q=naruto&p=1',
        0,
        1,
        10,
        10
      )

      expect(paginationList).toEqual([])
    })
  })
})
