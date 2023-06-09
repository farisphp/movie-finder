import IconSearch from 'icons/ic-search'

interface ISearchInput extends React.InputHTMLAttributes<HTMLElement> {
  wrapperClass?: string
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>
}

function SearchInput({
  wrapperClass,
  onSubmit,
  formAction,
  onInputChange,
  ...props
}: ISearchInput) {
  return (
    <form
      className={wrapperClass || ''}
      onSubmit={onSubmit}
      action={formAction}
    >
      <div className="relative w-full">
        <input
          name="q"
          className="w-full appearance-none rounded-full border border-blue-400 bg-white py-3 pl-12 pr-7 focus-visible:outline-none"
          type="text"
          placeholder="Enter movie title"
          onChange={onInputChange}
          {...props}
        />
        <IconSearch className="absolute left-3 top-3 text-blue-400" />
      </div>
    </form>
  )
}

export default SearchInput
