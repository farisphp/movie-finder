export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

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
  if (!totalItems) return []
  const maxPage = totalItems / size
  const halfPage = pageToShow / 2
  let smallestPage = halfPage < currentPage ? currentPage - halfPage : 1
  let biggestPage =
    halfPage > currentPage ? pageToShow : currentPage + halfPage - 1

  if (smallestPage < 1) smallestPage = 1
  if (biggestPage > maxPage) biggestPage = maxPage

  let pages = Array.from(
    { length: maxPage > pageToShow ? pageToShow : maxPage },
    (_, i) => ({ page: i + 1, pageUrl: '' })
  )
  pages = pages.map((_, index) => {
    const page = smallestPage + index
    const indexMark = url.indexOf('?')
    const searchParams = new URLSearchParams(url.substring(indexMark))
    searchParams.set('p', page.toString())

    return {
      page,
      pageUrl: generatePageUrl(url, page)
    }
  })

  return pages
}

export function generatePageUrl(url: string, page: number) {
  const indexMark = url.indexOf('?')
  const searchParams = new URLSearchParams(url.substring(indexMark))
  searchParams.set('p', page.toString())
  return `${url.substring(0, indexMark)}?${searchParams.toString()}`
}
