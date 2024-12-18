function Navbar() {
  return (
    <div className="bg-blueB text-white m-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:mt-2 lg:rounded-full">
      <p className="text-xl font-extrabold">WidyaWicara</p>
      <div className="flex gap-4">
        <p>Product</p>
        <p>Profile</p>
      </div>
      <div className="flex gap-2">
        {/* <p className="text-white bg-blueA rounded-md border-[1px] px-2">
          Sign in
        </p>
        <p className="text-white bg-blackA rounded-md border-[1px] px-2">
          Sign up
        </p> */}
        <p className="text-xl font-bold">bahrul</p>
      </div>
    </div>
  );
}

export default Navbar;
