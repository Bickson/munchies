import Image from "next/image";

interface RestaurantProps {
  id: string;
  name: string;
  image_url: string;
  delivery_time_minutes: number
  isOpen: boolean
  priceRange: string
}

export default function RestaurantCard({ id, name, image_url, isOpen, delivery_time_minutes }: RestaurantProps) {
  return (
    <div key={id} className="card relative flex flex-col justify-between w-[327px] h-[202px] overflow-hidden p-4 ">
      <div className="flex flex-row gap-2">
        <div className="card flex flex-row items-center gap-1 rounded-full px-3 py-2 w-fit h-fit ">
          <div className={` w-2 h-2 rounded-full ${isOpen ? 'bg-green' : 'bg-black'}`}></div>
          <p className="text-xs leading-[12px]">{isOpen ? 'Open' : 'Closed'}</p>
        </div>

        { isOpen && <div className="card flex flex-row items-center gap-1 rounded-full px-3 py-2 w-fit h-fit ">
            <p className="text-xs leading-[12px]">{delivery_time_minutes} min</p>
          </div>
        }
      </div>

      <Image className={`absolute -right-4 -top-8 ${isOpen ? 'opacity-100' : 'opacity-20'}`} src={process.env.NEXT_PUBLIC_BASE_URL + image_url} alt={name} width={140} height={140} />

      <div className={`flex flex-row justify-between items-end ${isOpen ? 'opacity-100' : 'opacity-20'}`}>
        <h2 className="">{name}</h2>
        <button disabled={!isOpen} className="bg-green h-8 w-8 rounded-full flex justify-center items-center">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6836 5C11.6836 5.17708 11.6107 5.33333 11.4648 5.46875L7.43359 9.49219C7.29818 9.6224 7.14453 9.6875 6.97266 9.6875C6.80078 9.6875 6.65495 9.63021 6.53516 9.51562C6.42057 9.40104 6.36328 9.25521 6.36328 9.07812C6.36328 8.99479 6.3763 8.91406 6.40234 8.83594C6.43359 8.75781 6.47786 8.69271 6.53516 8.64062L7.61328 7.52344L10.2539 5.14844L10.3945 5.48438L8.31641 5.63281H0.941406C0.753906 5.63281 0.602865 5.57292 0.488281 5.45312C0.373698 5.33333 0.316406 5.18229 0.316406 5C0.316406 4.81771 0.373698 4.66667 0.488281 4.54688C0.602865 4.42708 0.753906 4.36719 0.941406 4.36719H8.31641L10.3945 4.51562L10.2539 4.85938L7.61328 2.47656L6.53516 1.35938C6.47786 1.30729 6.43359 1.24219 6.40234 1.16406C6.3763 1.08594 6.36328 1.00521 6.36328 0.921875C6.36328 0.744792 6.42057 0.598958 6.53516 0.484375C6.65495 0.369792 6.80078 0.3125 6.97266 0.3125C7.14453 0.3125 7.29818 0.377604 7.43359 0.507812L11.4648 4.53125C11.6107 4.66667 11.6836 4.82292 11.6836 5Z" fill="white"/>
          </svg>
        </button>
      </div>

      {
        !isOpen && <div className="rounded border-[0.6px] border-[rgba(0,0,0,0.1)] p-2 whitespace-nowrap text-xs leading-[12px] absolute-center bg-off-white">
          <p>Opens tomorrow at 12 pm</p>
        </div>
      }
    </div>
  )
}