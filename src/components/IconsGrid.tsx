"use client";

export default function IconsGrid() {
  return (
    <div className="flex justify-end gap-5 sm:justify-center lg:mt-0 lg:pl-0 max-w-lg lg:max-w-none m-auto">
      <div className="mr-auto lg:w-44 flex-1 lg:flex-none space-y-5  sm:mr-0 lg:pt-8">
        <div className="relative">
          <img
            src="/img/event_1.png"
            alt=""
            className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover "
          />
        </div>
        <div className="relative">
          <img
            src="/img/event_2.png"
            alt=""
            className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover "
          />
        </div>
      </div>
      <div className="lg:w-44 flex-1 lg:flex-none space-y-5 sm:pt-0">
        <div className="relative">
          <img
            src="/img/profile-pictures_1.png"
            alt=""
            className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover "
          />
        </div>
        <div className="relative">
          <img
            src="/img/court_2.png"
            alt=""
            className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover "
          />
        </div>
      </div>
    </div>
  );
}
