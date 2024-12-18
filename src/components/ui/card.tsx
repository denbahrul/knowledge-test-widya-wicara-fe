export default function Card() {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-4 shadow-md">
      <img
        className="h-72 w-full rounded-md object-cover"
        src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div>
        <p className="text-lg font-bold">TITLE</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vestibulum blandit arcu.
        </p>
      </div>
      <div className="flex justify-between gap-1">
        <button className="text-white bg-blueB w-full rounded-full p-1 text-center">
          Edit
        </button>
        <button className="text-white bg-blackA w-full rounded-full p-1 text-center">
          Delete
        </button>
      </div>
    </div>
  );
}
