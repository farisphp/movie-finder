import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { generatePageUrl, generatePagination } from 'utils'

interface IPagination {
  url: string
  totalItems: number
  page: number
  size: number
}

function Pagination({ url, totalItems, page, size }: IPagination) {
  const maxPage = Math.ceil(totalItems / size)
  return (
    <div className="flex justify-center space-x-6">
      <Link
        to={generatePageUrl(
          window.location.toString(),
          page - 1 < 1 ? 1 : page - 1
        )}
        className={classnames(' text-blue-400 hover:underline', {
          hidden: page === 1
        })}
      >
        Prev
      </Link>
      <div className="flex justify-center space-x-2">
        {generatePagination(url, totalItems, page, size).map(
          ({ page: pageNumber, pageUrl }) => (
            <Link key={`page-link-${pageNumber}`} to={pageUrl}>
              <span
                className={`${
                  pageNumber !== page ? 'text-blue-400 hover:underline' : ''
                }`}
              >
                {pageNumber}
              </span>
            </Link>
          )
        )}
      </div>

      <Link
        to={generatePageUrl(
          window.location.toString(),
          page + 1 > (totalItems || 0) / size
            ? (totalItems || 0) / size
            : page + 1
        )}
        className={classnames('text-blue-400 hover:underline', {
          hidden: maxPage === page
        })}
      >
        Next
      </Link>
    </div>
  )
}

export default Pagination
