import Image from 'next/image';
import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col items-center space-y-6">
                <div className="relative w-20 h-20">
                    <Image
                        src="/icons/loading-circle.svg"
                        alt="Loading"
                        width={80}
                        height={80}
                        className="animate-spin"
                    />
                </div>
                <p className="text-gray-700 text-xl font-semibold">
                    Loading please wait...
                </p>
                <p className="text-gray-500 text-sm">
                    We are preparing everything for you.
                </p>
            </div>
        </div>
    );
};

export default Loader;
