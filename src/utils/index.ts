export function generatePosterUrl(
  path: string | undefined,
  size: 'original' | 'w500' | 'w780' = 'original'
): string | null {
  if (!path) return null
  return `https://image.tmdb.org/t/p/${size}/${path}`
}

export function generatePagination(
  url: string,
  totalItems = 0,
  currentPage = 1,
  size = 20,
  pageToShow = 10
) {
  /** Return empty if there is no totalItems to count */
  if (!totalItems || totalItems === 0) return []

  const maxPage = Math.ceil(totalItems / size)
  /** Rounds up halfPage, to prevent decimal number when pageToShow is odd number */
  const halfPage = Math.ceil(pageToShow / 2)

  let smallestPage = halfPage < currentPage ? currentPage - halfPage : 1
  let biggestPage =
    halfPage > currentPage ? pageToShow : currentPage + halfPage - 1

  /** Prevent smallestPage to have negative value */
  if (smallestPage < 1) smallestPage = 1
  /** Prevent biggestPage to have bigger value than max page */
  if (biggestPage > maxPage) biggestPage = maxPage

  const pages = Array.from(
    { length: maxPage > pageToShow ? pageToShow : maxPage },
    (_, index) => {
      const page = smallestPage + index
      return { page: index + 1, pageUrl: generatePageUrl(url, page) }
    }
  )

  return pages
}

export function generatePageUrl(url: string, page: number) {
  const questionMarkIndex = url.indexOf('?')
  const searchParams = new URLSearchParams(url.substring(questionMarkIndex))
  searchParams.set('p', page.toString())

  return `${url.substring(0, questionMarkIndex)}?${searchParams.toString()}`
}
