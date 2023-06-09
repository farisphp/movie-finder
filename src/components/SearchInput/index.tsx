import IconSearch from 'icons/ic-search'

function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-full">
      <input
        name="q"
        className="w-full appearance-none rounded-full border border-blue-400 bg-white py-3 pl-12 pr-7 focus-visible:outline-none"
        type="text"
        placeholder="Enter movie title"
        {...props}
      />
      <IconSearch className="absolute left-3 top-3 text-blue-400" />
    </div>
  )
}

export default SearchInput
