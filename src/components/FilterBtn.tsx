
export default function FilterBtn({ label, onSelect, active }: { label: string, onSelect: () => void, active: boolean }) {
  return (
    <button onClick={onSelect} className={`rounded-lg border-[0.6px] border-[rgba(0,0,0,0.1)] text-xs leading-[15px] flex flex-row items-center px-3 py-2 w-fit h-fit ${active ? 'bg-green text-white' : 'bg-white text-black'}`}>
      {label}
    </button>
  )
}