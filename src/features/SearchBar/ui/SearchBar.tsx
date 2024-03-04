import React, { useState } from 'react';
import { type FC } from 'react';

import { CiSearch } from 'react-icons/ci';

export const SearchBar: FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        console.log(searchValue);
    };

    return (
        <div className="flex w-full">
            <input
                className="w-full p-2.5 border border-primary-gray outline-0"
                type="text"
                placeholder="Начните вводить текст для поиска (не менее трех символов)"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button className="bg-primary-blue flex items-center justify-center p-2.5 border border-primary-gray" onClick={handleSearch}>
                <CiSearch className="w-8 h-8 text-white"/>
            </button>
        </div>
    );
};
