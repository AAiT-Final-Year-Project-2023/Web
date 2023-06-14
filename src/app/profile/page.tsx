import React from 'react';

const ProfilePage = () => {
  return (
    <div className="ml-80 mr-80 flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          className="w-32 h-32 rounded-full mb-4 ml-20"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAkAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAgMBB//EADUQAAIBAgQDBgMHBQEAAAAAAAABAgMEBREhMRJRwQYTIkFhcVOB8DJCYnKx0eEjQ1KCoRX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5nONOLlUkoxW7byRExLEaVjDxeKo14YLzMteXte8nxVpvLPSK2XyAvrvH7em3G3i60ue0Ssq47ez+w4U/wAsc/1KwASpYley3uqvyeQjiV7F5q6q/N5kUAWdHHb2D8coVPzRy/Qs7TH7epkriLovnvEzIA3kKkakVKElKL2aeaOjE2d7cWdTioz084PZ/I1OG4jSvoeHw1F9qDf1oBNAAAAAAAAIWKX8bGhno6ktIR5/wS6k404SnN5Rim2/Qxd/dyvLqdWWeW0VyQHjWqzrVZVasnKctW2cgAAAAB60rW4qpOlRqST81HQVbW4opurRqRS83EDyAAA6pVJ0akalKTjOLzTRyANhhd/G+ocWkasdJx5fwTjE2F1KzuoVo7Z5SXOJtKc41IRnB5xks0/QDoAAAABT9pLnurWNCL8VV6+yMyWfaKr3mIuPw4qPXqVgAAAfYxcpJRWbeiXM0OHYVToRU68VOq9cntEgYBQVS6lVlqqa0XqzQgPfUAAVuI4VTrxdShFQrZbLaRnWnFuMlk1o1yNoZ7HqCp3Masf7q1919ICsAAA03Zu5dS0lQk85Unp+V/TMyWfZ2r3eJRh8SLj16AasAAAABi8VfFiVy/xtEUlYquHErlP4jZFAAAC77NtcNwvPOPUuTMYRdK2vFxvKnPwyfL1NOAAAApu0jXDbrzzk/loXJmMXulc3b4HnCmuGL5+oEIAACVhUuHErZrfvEiKSsKWeJWyXxEBtAAAAAGU7RUuDEXPyqRUunQrDS9pbbvLSNeO9J6+z+kZoAAABaYfi7t4qlcJzgtpLdeh8scGq10p126UH5fef7Fn/AOTZ93wd08/88/EB7U761qJONxT9pSyf/RUvrWkm516ftGWf6FdPAVn4Lh5fihn1PlPAVn47h5fhjl1A8cQxeVeEqVunCm95PeS6FWaZYTZd3wd1/tnqVl7g9WiuOg3Vhyy8S/cCsAAAs+ztLjxFT8qcXLp1Kw03Zq27u0lXktar09kBcAAAAAOakI1IShNZxkmmuaMXiFrOzup0ZbbxeW6NsQcUsI31Dh2qR1hLp7AY8vsIw1U4xuLiP9R6wi/u+vuQ8LsJSvpKvBruHnKL835GiAAAAAAAAAqcXw1VIyuLePjWsor73r7lCbQzuK2Eo30Vb021WecYrn5gRcPtJXtzGlHbeT5I2lOEacIwgsoxWSXoQ8LsI2NHh0dWWs5c/T2JwAAAAAAAAHEqal78zxlFx3RJPmWe4EYHtKkvJ5HDpyA4B94JcmOCXJgfAdqnJncaSW+rA8oxctj2jBLXLXmd5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
          alt="Profile Picture"
        />
        <h1 className="text-2xl font-bold ml-20">John Doe</h1>
        <p className="text-gray-600 ml-20">Software Engineer</p>
        <div className="mt-4">
          <p>
            <span className="font-bold ml-20">Email: </span>
            john.doe@example.com
          </p>
        </div>
        <div className="mt-8">
          <button type="button"  className=" ml-20 inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-blue-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init><a href='/'> Logout</a>
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
